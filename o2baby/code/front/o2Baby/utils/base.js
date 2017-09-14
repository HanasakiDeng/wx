
import { Token } from 'token.js';

/**
 * @class 基类
 * 1,网络请求共通方法
 * 2,事件绑定数值获取方式
 */
class Base {

  constructor() {
  }

  /**
   * 请求操作(解决无限未授权重试的问题)
   * @param  params 请求参数
   * @param  noRefetch 布尔类型,当为true时,不做未授权重试机制
   */
  request(params, noRefetch) {

    let self = this;
    if (!params.method) {
      params.method = 'GET';
    }
    console.log(params.method);
    wx.request({
      url: params.url,

      data: params.data,

      method: params.method,

      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync('token')
      },

      success: function (res) {

        let statusCode = res.statusCode.toString();
        console.log(statusCode);

        //正常请求200,异常400开头
        if (statusCode.startsWith('2')) {
          console.log(res.data);
          /**
           * token 失效情况 
           */
          if (res.data.errorCode && res.data.errorCode === '401') {
            // 授权失败,重新获取令牌
            !noRefetch && self._refetch(params);
            //成功回调参数传回
          } else {
            typeof params.success === 'function' && params.success(res.data);
          }

        } else {

          // 授权失败,重新获取令牌
          statusCode === '401' && !noRefetch && self._refetch(params);

        }

      },

      /**
       * 内部问题中断调用
       *  如网络问题,电话中断
       */
      fail: function (err) {
        console.log(err);
      }
    })
  }

  /**
   * 重试权限认证
   * @param params 请求参数
   */
  _refetch(params) {
    let token = new Token();
    token.getTokenFromServer(() => {
      // 此处使用了箭头函数，保持环境变量不改变是箭头函数的一个特点，使用箭头函数，this的指代不会发生改变
      this.request(params, true);
    });
  }

  /**
   * 获取view层中 data 属性所绑定的值
   * @param event view层所绑定的事件对象
   * @param key data-key,绑定的key值
   */
  getDataSet(event, key) {
    return event.currentTarget.dataset[key];
  }

}

export { Base };