// pages/api/request/form-request/post/post.js
import { Toast } from '../../../../components/toast/toast.js'
Page({
  /**
   * 添加书籍到服务器
   */
  addOneBookToServer: function (e) {
    console.log(e.detail.value);
    let that = this;
    that.setData({
      btnDisabled: true
    })
    wx.request({
      url: 'https://hanasaki.top/api/add/book',
      method: 'POST',
      data: e.detail.value,
      success: function (res) {
        console.log(res);
        let toast = new Toast('添加成功');
        setTimeout(function () {
          wx.navigateBack({
            delta: 1
          });
        }, 2000);

      },
      fail: function (res) {
        that.setData({
          btnDisabled: false
        })
      }
    })
  }
})