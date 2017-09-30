import { Config } from '../../../utils/config.js';
// import { QQMapWX } from '../../libs/qqmap-wx-jssdk.js';
var amapFile = require('../../../libs/amap-wx.js');//如：..­/..­/libs/amap-wx.js;
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
    let gdMap = new amapFile.AMapWX({ key: Config.gdMapkey });
    let self = this;
    gdMap.getPoiAround({
      querykeywords: '加油站',
      querytypes: '010100',
      success: function (data) {
        console.log(data.poisData);
        let gasStationList = [];
        for (let item of data.poisData) {
          // 地址处理 
          item.address = item.cityname + item.adname + item.address;
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
        })
      }
    })
  }
  toThere(e) {
    console.log(e);
  }
}
export default GasStation;