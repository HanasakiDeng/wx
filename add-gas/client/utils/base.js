
import { Config } from '../utils/config.js';
import { Token } from 'token.js';


class Base {

  // 构造函数
  constructor() {

  }

  // 解决无限未授权重试的问题
  // 当noRefech为true,不做未授权重试机制

  request(params) {

    let that = this,
      token = wx.getStorageSync('token');

    if (!params.method) {
      params.method = 'GET';
    }
    params.data.token = token;
    console.log(params.data);
    wx.request({
      url: params.url,

      data: params.data,

      method: params.method,

      success: function (res) {
        //请求成功的情况
        if (res.statusCode.toString().startsWith('2')) {
          console.log("base:res");
          console.log(res.data);
          typeof params.success === 'function' && params.success(res.data);
        }
        /**
         * 权限认证失效,重新获取
         */
        if (res.statusCode === 401) {
          this._refetch(params);
        }
        //访问被拒 
        if (res.statusCode === 403) {
          typeof params.fail === 'function' && params.fail(res.data);
        }
      },
      // 此处fail指的是调用都不成功，比如网络中断，如果此次请求成功到达api内部，由于api内部错误，引起的不
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

  uploadFile(){
    wx.uploadFile({
      url: '',
      filePath: '',
      name: '',
      header: {},
      formData: {},
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }

}

export { Base };