//app.js
import {Token} from 'utils/token';
App({

  onLaunch: function (options) {
    console.log("test");
    let token = new Token();
    token.verify();
  },
  onShow: function (options) {
    console.log(options);
  },
  globalData: {
    userInfo: null
  }
})