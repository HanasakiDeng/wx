//app.js
import {Token} from 'utils/token';
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
App({

  onLaunch: function (options) {
    let token = new Token();
    token.verify();
    qcloud.setLoginUrl(config.service.loginUrl)
  },
  onShow: function (options) {
    console.log(options);
  },
  globalData: {
    userInfo: null
  }
})