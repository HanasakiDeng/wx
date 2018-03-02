// login.js
import { LoginModel } from 'login-model.js';
import { Constants } from '../../utils/constants.js';

let loginModel = new LoginModel();

let app = {
  data: {
    isInput: false
  },
  bindLoginSubmit: function (e) {
    this.setData({
      isInput: false
    })
    loginModel.loginRequest(e.detail.value);
  },
  bindInputTap: function (e) {
    this.setData({
      isInput: true
    })
    console.log(this.data.isInput);
  },
  onLaunch: function (e) {

  },
  onShow: function (e) {

  },
  onLaunch: function (e) {

  },
  onShow: function (e) {
    let role = wx.getStorageSync('ROLE');
    let username = wx.getStorageSync('USERANME');
    let password = wx.getStorageSync('PASSWORD');
    if (role) {
      this.setData({
        username: username,
        password: password
      })
      wx.showToast({
        title: '登录状态保持成功',
        icon: 'success',
        success: function () {
          if (role === '1086') {
            wx.redirectTo({
              url: '../order-list/order-list'
            })
          } else {
            wx.redirectTo({
              url: '../examine/examine'
            })
          }
        }
      })

    }
  }

}
Page(app);