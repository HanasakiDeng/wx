let GeographyUtils = require('../../common/utils');
const {mysql} = require('../../config');
const DB_NAME = 'GAS';
const config = mysql(DB_NAME);
const nearByDistance = 5;
const degree = GeographyUtils.calcDegreesByDistance(nearByDistance);

let GasDB = require('knex')({
    client: 'mysql',
    connection: {
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.pwd,
        database: config.db,
        charset: config.char,
        multipleStatements: true
    }
});

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
        let resBody = {
            latitude: 31.230416,
            longitude: 121.473701,
            currentOffset: 0
        };
        req.body = resBody;
        let sql = this.getQuerySql(resBody);
        console.log(sql);
        GasDB.raw(sql).then(function (rows) {
            if (Array.isArray(rows)) {
                res.json({res: 1, data: rows[0], msg: '请求成功'});
            }
        }).catch(function (error) {
            console.error(error);
            res.json({res: 0, msg: '请求失败'});
        });

    }

    getQuerySql(resBody) {
        return `
                 SELECT
	                gas_station_id,
	                name,
	                city,
	                district,
	                address,
	                longitude,
	                latitude,
	                image_url,
	                ROUND(2 * ASIN(
		                        SQRT(
			                       POW(
				                      SIN((latitude -${resBody.latitude}) * PI() / 180),
				                      2
			                          )
		            ) + COS(latitude * PI() / 180) * COS(${resBody.latitude} * PI() / 180) * POW(
			        SIN((longitude -${resBody.longitude}) * PI() / 180),
			        2
		            )
	                ) * 6378.137*10000)/10000 AS distance
                 FROM
	                 gas_station
                 WHERE
	                latitude > ${resBody.latitude} - ${degree}
                 AND latitude < ${resBody.latitude} + ${degree}
                 AND longitude > ${resBody.longitude} - ${degree}
                 AND longitude < ${resBody.longitude} + ${degree}
                 ORDER BY distance ASC
                 LIMIT ${resBody.currentOffset},5`
    }

    getBannersList(req, res, next) {

    }

}

module.exports = AddGasController;
