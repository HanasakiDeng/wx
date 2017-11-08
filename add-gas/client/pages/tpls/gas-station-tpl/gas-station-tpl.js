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
          success: function (rs) {
            console.log(rs);
            //所获取数据
            let gasStationList = rs.gasStationList;

            //数组遍历操作
            gasStationList.map(function (item, index, thisArray) {
              item.address = item.city + item.district + item.address;
              item.originLocation = res.longitude + ',' + res.latitude;
              //距离操作,后台传递数值为千米为单位
              item.distance = (parseFloat(item.distance)).toFixed(2);
              if (item.distance < 1) {
                item.unit = 'm';
                item.distance = (item.distance * 1000);
              } else {
                item.unit = 'km';
              }
            });

            //非第一次加载,数组合并;
            if (self.context.data.hasOwnProperty('gasStationList')) {
              gasStationList = self.context.data.gasStationList.concat(gasStationList);
            }
            //绑定到页面数据
            self.context.setData({
              gasStationList: gasStationList
            })
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