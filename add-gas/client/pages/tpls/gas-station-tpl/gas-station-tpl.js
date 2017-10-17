import { CONFIG } from '../../../utils/config.js';
import {}

/**
 * @class 加油赞单列表操作
 */
class GasStation {
  constructor(context) {
    this.context = context;
    this.context.toThere = this.toThere.bind(this);
  }
  //获取附近加油站信息
  getStationList() {
    let self = this;
    wx.getLocation({
      success: function (res) {
       
        gdMap.getPoiAround({
          querykeywords: '加油站',
          querytypes: '010100',
          location: res.longitude + ',' + res.latitude,
          success: function (data) {
            console.log(data.poisData);
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
              gasStationList.push(item);
            }
            console.log(gasStationList);
            self.context.setData({
              gasStationList: gasStationList
            });
          }
        });
      },
    })
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