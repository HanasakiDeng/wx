import { Config } from '../../utils/config.js';
// import { QQMapWX } from '../../libs/qqmap-wx-jssdk.js';
var amapFile = require('../../libs/amap-wx.js');//如：..­/..­/libs/amap-wx.js;
// gas_station_id`, `name`, `city`, `district`, `address`, `longitude`, `latitude`, `tel`
function GasStation(data) {
  this.id = data.id;
  this.name = data.name;
  this.city = "上海市";
  this.district = data.adname;
  this.address = data.address;
  this.longitude = data.location.split(",")[0];
  this.latitude = data.location.split(",")[1];
  this.tel = data.tel;
}
function Store(data) {
  this.id = data.id;
  this.name = data.name;
  this.code = null;
  this.city = "上海市";
  this.district = data.adname;
  this.address = data.address;
  this.longitude = data.location.split(",")[0];
  this.latitude = data.location.split(",")[1];
  this.tel = data.tel.length === 0 ? '' : data.tel;
}

var markersData = [];
Page({
  data: {

  },
  onLoad: function () {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: Config.gdMapkey });

    // 汽车保养与美容
    myAmapFun.getPoiAround({
      querytypes: "010400",
      offset: 10,
      page: 2,
      success: function (res) {
        console.log(res);
        var store = null;
        var storeList = [];
        for (var item of res.poisData) {
          store = new Store(item);
          store.code = '001003';
          storeList.push(store);
        }
        console.log(storeList);
        wx.request({
          url: "http://localhost:3000/gas",
          data: { gasList: storeList },
          method: 'POST',
          success: function (res) {
            console.log(res);
          }
        })
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