let axios = require('axios'),
    uuidV1 = require('uuid/v1');

let Session = require('../common/session');

let TUser = require('../tools/gas/TUser');
let tUser = new TUser();


class TokenController {
    /**
     * 处理token
     * @param req
     * @param res
     * @param next
     */
    doToken(req, res, next) {
        if (req.body.code) {
            this.createToken(req, res, next);
        }
        if (req.body.token) {
            this.verify(req, res, next);
        }
    }

    /**
     * 生成token
     * @param req
     * @param res
     * @param next
     */
    createToken(req, res, next) {
        axios.get(Constants.WX_BASE_URL, {
            params: {
                appid: Constants.APP_ID,
                secret: Constants.APP_SECRET,
                js_code: req.body.code,
                grant_type: 'authorization_code'
            }
        })
            .then(function (rs) {
                let openId = rs.data.openid,
                    sessionKey = rs.data.session_key,
                    token = uuidV1(openId + sessionKey);

                tUser.queryUserIsExitByUserId(openId).then(function (rows) {

                    //存在情况,直接返回token
                    if (rows[0].num === 1) {

                        res.json({statusCode: 1, data: {token: token}});

                    } else { //不存在,插入用户信息
                        tUser.insertUser(openId).then(function (rows) {
                            res.json({statusCode: 1, data: {token: token}});
                        })
                    }
                    //保存 session token
                    Session.set(token, {
                        openId: openId,
                        token: token
                    });

                });
            })
            .catch(function (err) {
                console.log(err);
            });
        next();
    }

    /**
     * 认证token是否失效
     * @param req
     * @param res
     * @param next
     */
    verify(req, res, next) {
        if (req.body.token) {
            Session.get(req.body.token, function (object) {
                if (object.token === req.body.token) {
                    res.json({statusCode: 1, isValid: 1}) // 1代表有效,0代表失效
                } else {
                    res.json({statusCode: 1, isValid: 0})
                }
            })
        } else {
            res.json({statusCode: 0, msg: '参数不匹配'});
        }
    }

}

module.exports = TokenController;
