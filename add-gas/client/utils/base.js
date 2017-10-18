
import { Config } from '../utils/config.js';
import { Token } from 'token.js';


class Base {

  // 构造函数
  constructor() {

  }

  // 解决无限未授权重试的问题
  // 当noRefech为true,不做未授权重试机制

  request(params, noRefetch) {

    let that = this,
      token = wx.getStorageSync('token');

    if (!params.method) {
      params.method = 'GET';
    }
    params.data.token = token;
    wx.request({
      url: params.url,

      data: params.data,

      method: params.method,

      success: function (res) {

        var code = res.statusCode.toString();

        var startChar = code.charAt(0);

        // 正常的返回200，不正常返回400开头
        if (startChar == '2') {

          if (params.sCallback) {
            params.sCallback(res.data);
            //只能返回通用的基类数据
          }

          // params.sCallBack&&params.sCallBack(res); 简介的写法

        } else {

          // 如果返回401，需要重新向服务器发送，请求令牌，令牌请求返回之后，需要再次发送http请求，
          // 


          if (code == '401') {
            // token.getTokenFromServer
            // wx.request
            // base.request



            if (!noRefetch) {

              // 回调函数中不能用that
              that._refetch(params);
            }
          }

          if (noRefetch) {
            // 发生错误需要的回调函数
            params.eCallback && params.eCallback(res.data);
          }


        }



      },

      // 此处fail指的是调用都不成功，比如网络中断，如果此次请求成功到达api内部，由于api内部错误，引起的不
      // 成功，会走else

      fail: function (err) {
        console.log(err);
      }
    })
  }


  _refetch(params) {
    var token = new Token();
    token.getTokenFromServer((token) => {
      // 此处使用了箭头函数，保持环境变量不改变是箭头函数的一个特点，使用箭头函数，this的指代不会发生改变

      this.request(params, true);
    });
  }

  //获取元素上的绑定的值
  getDataSet(event, key) {
    return event.currentTarget.dataset[key];
  }

}

export { Base };