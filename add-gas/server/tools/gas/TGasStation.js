const Config = require('./gas_config');
let GeographyUtils = require('../../common/utils');
const nearByDistance = 10; //以5公里为界限;
const degree = GeographyUtils.calcDegreesByDistance(nearByDistance);

class TGasStation {
    constructor() {
        this.tableName = 'gas_station';
    }

    /**
     * 查询加油站列表
     * @param reqBody 请求体对象
     */
    queryGasStationList(reqBody) {
        let sql = `
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
				                      SIN((latitude -${reqBody.latitude}) * PI() / 180),
				                      2
			                          )
		             + COS(latitude * PI() / 180) * COS(${reqBody.latitude} * PI() / 180) * POW(
			        SIN((longitude -${reqBody.longitude}) * PI() / 180),
			        2
		            ))
	                ) * 6378.137*10000)/10000 AS distance
                 FROM
	                 ${this.tableName}
                 WHERE
	                latitude > ${reqBody.latitude} - ${degree}
                 AND latitude < ${reqBody.latitude} + ${degree}
                 AND longitude > ${reqBody.longitude} - ${degree}
                 AND longitude < ${reqBody.longitude} + ${degree}
                 ORDER BY distance ASC
                 LIMIT ${reqBody.currentOffset},5`;
        console.log(sql);
        return Config.GasDB.raw(sql);
    }
}

module.exports = TGasStation;