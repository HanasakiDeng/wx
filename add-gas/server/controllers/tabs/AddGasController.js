let TGasStation = require('../../tools/gas/TGasStation');
let tGasStation = new TGasStation();

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
        console.log(req.body);
        let resBody = {
            latitude: 31.230416,
            longitude: 121.473701,
            currentOffset: 0,
            token: ''
        };
        req.body = resBody;
        tGasStation.queryGasStationList(resBody).then(function (rows) {
            console.log(rows);
            res.status(200).json({gasStationList: rows[0]})
        }).catch(function (error) {
            console.error(error);
            res.status(500).json({msg: '查询异常,请稍后重试'});
        });
    }

    getBannersList(req, res, next) {

    }

}

module.exports = AddGasController;
