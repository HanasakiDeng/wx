//地球纬度
const EARTH_RADIUS = 6378.137;

class GeographyUtils {
    /**
     * 获取 弧度
     * @param d 经纬度
     * @returns {number}弧度
     */
    static getRadian(d) {
        return d * Math.PI / 180.0;
    }

    static calcDegreesByDistance(distance) {
        let eachDegrees = 111; //单位千米;1度换成距离为111km;

        return distance / eachDegrees;
    }

    /**
     * 根据两点经纬度,计算距离
     * @param lat1 坐标1纬度
     * @param lng1 坐标1经度
     * @param lat2 坐标2纬度
     * @param lng2 坐标2经度
     * @returns {number} 两点距离
     */
    static calcDistance(lat1, lng1, lat2, lng2) {
        if (( Math.abs(lat1) > 90  ) || (  Math.abs(lat2) > 90 )) {
            console.log("纬度值不正确");
        }
        if (( Math.abs(lng1) > 180  ) || (  Math.abs(lng2) > 180 )) {
            console.log("经度值不正确");
        }
        let radLat1 = this.getRadian(lat1);
        let radLat2 = this.getRadian(lat2);
        let a = radLat1 - radLat2;
        let b = this.getRadian(lng1) - this.getRadian(lng2);
        let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
            Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
        s = s * EARTH_RADIUS;// EARTH_RADIUS;
        s = Math.round(s * 10000) / 10000;
        return s;
    }
}

module.exports = GeographyUtils;