import { Config } from '../../../utils/config.js';
import { Base } from '../../../utils/base.js';

/**
 * @class 加油赞单列表操作
 */
class GasStation extends Base {
  constructor(context) {
    super();
    this.context = context;
    this.context.toThere = this.toThere.bind(this);
  }
  //获取附近加油站信息
  getStationList(currentOffset) {

    let self = this;
    wx.getLocation({
      success: (res) => {
        this.request({
          url: Config.GAS_STATION_URL,
          data: {
            latitude: res.latitude,
            longitude: res.longitude,
            currentOffset: currentOffset,
          },
          method: 'GET',
          success: function (res) {
            let gasStationList = [];
            for (let item of data.poisData) {
              // 地址处理 
              item.address = item.cityname + item.adname + item.address;
              item.originLocation = res.longitude + ',' + res.latitude
              if (item.distance >= 1000) {
                item.unit = 'km';
                item.distance = (item.distance / 1000).toFixed(2);
              } else {
                item.unit = 'm';
              }
              gasStationList.push(item);4
            }
          }
        });
      }
    });
  }

  //跳转至导航页面
  toThere(e) {
    console.log(e);
    let gasStation = e.currentTarget.dataset.gasStation;
    wx.navigateTo({
      url: '../../navigation/navigation?gasStation=' + JSON.stringify(gasStation),
    })

  }
}
export default GasStation;