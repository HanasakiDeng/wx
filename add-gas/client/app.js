//app.js
import { config } from './config'
let qcloud = require('./vendor/wafer2-client-sdk/index')
let util = require('./utils/util.js')
App({

  onLaunch: function (options) {
    qcloud.setLoginUrl(config.service.loginUrl)
    this.doLogin();
  },
  doLogin() {
    if (this.globalData.logined) return
    util.showBusy('正在登录')
    var that = this
    // 调用登录接口
    qcloud.login({
      success(result) {
        if (result) {
          util.showSuccess('登录成功')
          console.log(result)
          that.globalData.userInfo = result;
          that.globalData.logined = true;
        } else {
          // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
          console.log(config.service.requestUrl);
          qcloud.request({
            url: config.service.requestUrl,
            login: true,
            success(result) {
              util.showSuccess('登录成功')
              that.globalData.userInfo = result;
              that.globalData.logined = true;
              console.log(that.globalData.userInfo)
            },
            fail(error) {
              util.showModel('请求失败', error)
              console.log('request fail', error)
            }
          })
        }
      },
      fail(error) {
        util.showModel('登录失败', error)
        console.log('登录失败', error)
      }
    })
  },
  onShow: function (options) {
    console.log(options);
  },
  globalData: {
    userInfo: null,
    logined: false
  }
})