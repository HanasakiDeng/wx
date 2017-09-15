import { Config } from '../../utils/config.js';
var markersData = [];
var amapFile = require('../../libs/amap-wx.js');//如：..­/..­/libs/amap-wx.js;

function Store(data) {
  this.name = data.name;
  this.address = data.address;
  this.location = data.location;
  this.distance = null;
}

Page({
  data: {

  },
  onLoad: function () {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: Config.key });
    wx.getLocation({
      success: function (res) {
        let origin = res.longitude + "," + res.latitude;
        myAmapFun.getInputtips({
          types: '010000',
          keywords: "汽车维修",
          citylimit: true,
          city: '上海市',
          offset: 25,
          location: origin,
          success: function (res) {
            console.log(res);
            let store = null;
            let storeList = [];
            for (let tip of res.tips) {
              store = new Store(tip);
              (function (store) {
                myAmapFun.getDrivingRoute({
                  origin: origin,
                  destination: store.location,
                  success: function (data) {
                    if (data.paths) {
                      store.distance = (data.paths[0].distance / 1000).toFixed(2) + 'km'
                      storeList.push(store);
                    }
                  }
                })
              })(store)
            }
            console.log(storeList);
          }
        })
      },
    })

    myAmapFun.getDrivingRoute({
      origin: '116.481028,39.989643',
      destination: '116.434446,39.90816',
      success: function (data) {
        var points = [];
        console.log(data);
        if (data.paths && data.paths[0] && data.paths[0].steps) {
          var steps = data.paths[0].steps;
          for (var i = 0; i < steps.length; i++) {
            var poLen = steps[i].polyline.split(';');
            for (var j = 0; j < poLen.length; j++) {
              points.push({
                longitude: parseFloat(poLen[j].split(',')[0]),
                latitude: parseFloat(poLen[j].split(',')[1])
              });
            }
          }
        }
        that.setData({
          polyline: [{
            points: points,
            color: "#0091ff",
            width: 6
          }]
        });
        if (data.paths[0] && data.paths[0].distance) {
          that.setData({
            distance: (data.paths[0].distance / 1000).toFixed(2) + 'km'
          });
        }
        if (data.taxi_cost) {
          that.setData({
            cost: '打车约' + parseInt(data.taxi_cost) + '元'
          });
        }

      },
      fail: function (info) {

      }
    })
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