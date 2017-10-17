import { CONFIG } from '../../utils/config.js';
var amapFile = require('../../libs/amap-wx.js');//如：..­/..­/libs/amap-wx.js;

Page({
  data: {
    distance: '',
    polyline: []
  },
  onLoad: function (options) {
    if (options) {
      this.init(options);
    }
  },
  /**
   * 初始化数据
   */
  init: function (options) {
    let that = this;
    let gasStation = JSON.parse(options.gasStation),
      destination = gasStation.location.split(','),
      originLocation = gasStation.originLocation,
      originLocationArray = originLocation.split(',');
    this.setData({
      // 起点坐标
      originLocation: originLocation,
      currentLongitude: (parseFloat(originLocationArray[0]) + parseFloat(destination[0])) / 2.000000,
      currentLatitude: (parseFloat(originLocationArray[1]) + parseFloat(destination[1])) / 2.000000,
      destination: gasStation.location,
      desLongitude: destination[0],
      desLatitude: destination[1],

      //起点终点图标标记
      markers: [{
        iconPath: "../../images/icon/start.png",
        id: 0,
        latitude: originLocationArray[1],
        longitude: originLocationArray[0],
        width: 23,
        height: 33
      }, {
        iconPath: "../../images/icon/end.png",
        id: 0,
        latitude: destination[1],
        longitude: destination[0],
        width: 24,
        height: 34
      }],
    })
    this.getDrivingRoute();
  },
  //获取驾车路线
  getDrivingRoute: function () {
    let that = this;
    var myAmapFun = new amapFile.AMapWX({ key: Config.gdMapkey });
    myAmapFun.getDrivingRoute({
      origin: that.data.originLocation,
      destination: that.data.destination,
      success: function (data) {
        console.log(data);
        var points = [];
        var instructions = [];
        if (data.paths && data.paths[0] && data.paths[0].steps) {
          var steps = data.paths[0].steps;
          for (var i = 0; i < steps.length; i++) {
            instructions.push(steps[i].instruction);
            var poLen = steps[i].polyline.split(';');
            for (var j = 0; j < poLen.length; j++) {
              points.push({
                longitude: parseFloat(poLen[j].split(',')[0]),
                latitude: parseFloat(poLen[j].split(',')[1])
              })
            }
          }
        }
        that.setData({
          instructions: instructions,
          polyline: [{
            points: points,
            color: "#0091ff",
            width: 6
          }]
        });
        if (data.paths[0] && data.paths[0].distance) {
          that.setData({
            distance: data.paths[0].distance + '米'
          });
        }
      },
      fail: function (info) {

      }
    })
  },
  goDetail: function () {
    console.log(this.data.instructions);
  }
})