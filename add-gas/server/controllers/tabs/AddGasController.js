let TGasStation = require('../../tools/gas/TGasStation');
let tGasStation = new TGasStation();
let RedisClient = require('../../common/redis');

/**
 * @class 加油Tab栏控制层 <br>
 * 实现功能有:<br>
 * (1)获取加油站信息 getGasStationList();<br>
 * (2)获取广告栏图片信息 getBannersList();<br>
 * (3)付款
 */
class AddGasController {
    /**
     * 获取加油站信息
     * @param req 请求对象
     * @param res 返回对象
     * @param next 下一路由回调对象
     */
    getGasStationList(req, res, next) {
        console.log(req.query);
        if (req.query) {
            RedisClient.get(req.query.token, function (rs) {
                if (rs) {
                    tGasStation.queryGasStationList(req.query).then(function (rows) {
                        console.log(rows[0]);
                        res.json({gasStationList: rows[0]});
                    }).catch(function (error) {
                        console.error(error);
                        res.json({msg: '查询异常,请稍后重试'});
                    });
                }else{
                    res.status(401).json({msg:'当前token失效'});
                }
            });
        } else {
            res.status(403).json('请求参数有误,请重新尝试');
        }
    }
    /**
     * 获取广告
     * @param req
     * @param res
     * @param next
     */
    getBannersList(req, res, next) {

    }

}

module.exports = AddGasController;
