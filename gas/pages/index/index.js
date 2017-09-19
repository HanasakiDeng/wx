import { Config } from '../../utils/config.js';
// import { QQMapWX } from '../../libs/qqmap-wx-jssdk.js';
var amapFile = require('../../libs/amap-wx.js');//如：..­/..­/libs/amap-wx.js;

var markersData = [];
Page({
  data: {

  },
  onLoad: function () {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: Config.gdMapkey });
    myAmapFun.getPoiAround({
      // 加油站
      querytypes: "010100",
      querykeywords: '加油站',
      success: function (res) {
        console.log(res);
      }
    });
    // 洗车
    myAmapFun.getPoiAround({
      querytypes: "010500",
      success: function (res) {
        console.log(res);
      }
    });
    // 汽车保养与美容
    myAmapFun.getPoiAround({
      querytypes: "010400",
      success: function (res) {
        console.log(res);
      }
    });
    //  维修
    myAmapFun.getPoiAround({
      querytypes: "030000",
      success: function (res) {
        console.log(res);
      }
    });
  },
  goDetail: function () {
    wx.navigateTo({
      url: '../navigation_car_detail/navigation'
    })
  },
  goToCar: function (e) {
    wx.redirectTo({
      url: '../navigation_car/navigation'
    })
  },
  goToBus: function (e) {
    wx.redirectTo({
      url: '../navigation_bus/navigation'
    })
  },
  goToRide: function (e) {
    wx.redirectTo({
      url: '../navigation_ride/navigation'
    })
  },
  goToWalk: function (e) {
    wx.redirectTo({
      url: '../navigation_walk/navigation'
    })
  }
})