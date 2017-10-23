import { Config } from 'config.js';

class Token {
  constructor() {
    // 校验token接口
    this.tokenUrl = Config.TOKEN_URL;
  }

  // 需要校验，当前的令牌是否有效

  verify() {
    var token = wx.getStorageSync('token');
    console.log(token);
    if (!token) {
      // 获取服务器令牌接口
      this.getTokenFromServer();
    } else {
      // 检验令牌是否失效，获取服务器校验令牌接口
      this._verifyFromServer(token);
    }
  }

  // 令牌失效,重新获取,保存token
  _verifyFromServer(token) {
    var that = this;
    wx.request({
      url: that.tokenUrl,
      method: 'POST',
      data: {
        token: token
      },
      success: function (res) {
        var valid = res.data.isValid;
        if (!valid) { 
          that.getTokenFromServer();
        }
      }
    });
  }
  // 为何在token没有调用base中封装好的request方法，第一：没有继承base；第二：让token继承base这个类也不太合适
  // base类专门为模型类准备的，token更加倾向于是独立的业务类，没有必要继承base;第三：在base中还要调用token
  // 如何把token继承于base,base是父类，就不太方便调用子类中的方法，token更加理解为是工具类，就不需要调用base下的request
  // 方法了，
  getTokenFromServer(callBack) {
    var that = this;
    wx.login({
      success: function (res) {

        console.log(res.code);
        wx.request({
          url: that.tokenUrl,
          method: 'POST',
          data: {
            code: res.code
          },
          success: function (res) {
          
            if(res.statusCode === '200'){
              console.log(res.data);
              let token = res.data.token;
              wx.setStorageSync('token', token);
              callBack && callBack(token);
            }
          }
        });
      },
      fail:function(err){
         console.log(err);
      }
    })
  }
}
export { Token }