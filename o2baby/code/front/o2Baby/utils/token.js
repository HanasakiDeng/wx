import { Config } from 'config.js';
import { Constants } from 'constants.js';

/**
 * @class Token机制类
 * 通过本地code获取token
 */
class Token {
  constructor() {

    // 获取tokenUrl接口
    this.tokenUrl = Config.tokenUrl;
  }
  /**
   * 获取令牌 
   */
  getTokenFromServer(callback) {
    let self = this;
    // 统一调用微信登录接口
    wx.login({
      success: (res) => {
        console.log(`code:${res}`);
        if (res.code) {
          wx.request({
            url: self.tokenUrl,
            method: 'POST',
            data: {
              code: res.code
            },
            success: function (res) {
              console.log(res.data);
              wx.setStorageSync(Constants.TOKEN, res.data.token);
              typeof callback === 'function' && callback();
            }
          })
        }
      }
    })
  }
}

export { Token }