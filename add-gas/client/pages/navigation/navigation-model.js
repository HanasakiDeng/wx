import { Base } from '../../utils/base.js';
import { config } from '../../config'
let amapFile = require('../../libs/amap-wx.js');//如：..­/..­/libs/amap-wx.js;
let myAmapFun = new amapFile.AMapWX({ key: config.map.gdMapkey });

class NavigationModel extends Base {

  constructor(context, destination) {
    super();
    this.context = context;
    this.destination = destination;
  }
  /**
   * @origin 当前位置经纬度 
   */
  getDrivingRoute(origin) {

    let that = this;

    myAmapFun.getDrivingRoute({

      origin: origin,
      destination: that.destination,

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
        //绘制路线
        that.context.setData({
          instructions: instructions,
          polyline: [{
            points: points,
            color: "#008000",
            width: 6,
            arrowLine: true,
            borderColor: '#fff'
          }]
        });

        //显示距离
        if (data.paths[0] && data.paths[0].distance) {
          that.context.setData({
            distance: data.paths[0].distance + '米'
          });
          // if (data.paths[0].distance > 50) {
          //   that.context.setData({
          //     distance: '去加油'
          //   });
          // }else{

          // }
        }
      },
      fail: function (info) {

      }
    })
  }

}
export { NavigationModel }