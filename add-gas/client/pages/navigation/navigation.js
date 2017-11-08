import { NavigationModel } from 'navigation-model.js';

let navigationModel = null;
function Map() {
  this.longitude = 9;
  this.latitude = 0;
  this.scale = 13;
  this.markers = [];
  this.polyline = [];
}

Page({
  data: {
    distance: '',
    polyline: []
  },
  onLoad: function (options) {
    if (options) {
      let gasStation = JSON.parse(options.gasStation);
      this.initData(gasStation);
    }
  },
  //初始化数据 
  initData: function (gasStation) {

    //起点经纬度数组
    let originArr = gasStation.originLocation.split(',');

    //目的地经纬度 
    let destination = gasStation.longitude + ',' + gasStation.latitude;
    this.setData({
      //地图中心点位置坐标
      centerLong: this.getAvgPoint(originArr[0], gasStation.longitude),
      centerLat: this.getAvgPoint(originArr[1], gasStation.latitude),

      //起点终点图标标记
      markers: [{
        iconPath: "../../images/icon/start.png",
        id: 0,
        longitude: originArr[0],
        latitude: originArr[1],
        width: 23,
        height: 33
      }, {
        iconPath: "../../images/icon/end.png",
        id: 0,
        longitude: gasStation.longitude,
        latitude: gasStation.latitude,
        width: 24,
        height: 34
      }],
    })

    navigationModel = new NavigationModel(this, destination);
    navigationModel.getDrivingRoute(gasStation.originLocation);
    this._refreshData();
  },


  //更新界面数据
  _refreshData: function () {
    setInterval(() => {
      wx.getLocation({
        success: function (res) {
          let origin = res.longitude + ',' + res.latitude;
          navigationModel.getDrivingRoute(origin);
        },
      })
    }, 5000);
  },
  //获取两点平均值
  getAvgPoint: function (num1, num2) {
    return (parseFloat(num1) + parseFloat(num2)) / 2.000000;
  },
})