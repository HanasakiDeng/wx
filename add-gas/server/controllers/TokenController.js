let axios = require('axios'),
    uuidV1 = require('uuid/v1');

let RedisUtils = require('../common/utils/RedisUtils');

let Constants = require('../common/constants/constants');

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
        }).then(function (rs) {
                let openId = rs.data.openid,
                    sessionKey = rs.data.session_key,
                    token = uuidV1(openId + sessionKey).split('-').join(''); //去除连接符

                tUser.queryUserIsExitByUserId(openId).then(function (rows) {
                    //保存 redis token

                    //存在情况,直接返回token
                    if (rows[0].num === 1) {

                        res.json({token: token});

                    } else { //不存在,插入用户信息
                        tUser.insertUser(openId).then(function (rows) {
                            res.json({token: token});
                        });
                    }
                    RedisClient.set(token, openId);
                });
            })
            .catch(function (err) {
                console.log(err);
            });

    }

    /**
     * 认证token是否失效
     * @param req
     * @param res
     * @param next
     */
    verify(req, res, next) {
        if (req.body.token) {
            RedisUtils.get(req.body.token, function (rs) {
                console.log(`rs:`);
                console.log(rs);
                if (rs) {
                    res.status(200).json({msg: '登录状态未过期'});
                } else {
                    res.status(401).json({isValid: 0})
                }
            })
        } else {
            res.status(403).json({msg: '参数不匹配'});
        }
    }

}

module.exports = TokenController;
