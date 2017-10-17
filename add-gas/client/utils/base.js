import { CONFIG } from 'config.js';
class Base {
  constructor() {
    this.host = CONFIG.host;
  }
  doRequest(options) {
    wx.request({
      url: options.url,
      method: options.method,
      data: options.data,
      dataType: options.dataType,
      success: function (res) {
        console.log(res.data);
        typeof options.success == 'function' && options.success(res.data);
      },
      fail: options.fail,
      complete: options.complete
    });
  }
}
module.exports = Base;