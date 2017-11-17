// pages/api/request/form-request/get/get.js
Page({

  onShow: function () {
    this.reloadBookList();
  },
  reloadBookList: function () {
    let that = this;
    console.log('onload');
    wx.request({
      url: 'https://hanasaki.top/api',
      method: 'GET',
      success: function (res) {
        console.log(res.data.books);
        that.setData({
          bookList: res.data.books
        })
      },
      fail: function (err) {
        console.log(err);
      }
    })
  },

  /**
   * 添加书籍数据
   */
  add: function (e) {
    wx.navigateTo({
      url: '../post/post',
    });
  },
  /**
   * 删除当前书籍信息
   * delete方法对应
   */
  delete: function (e) {
    let that = this;
    wx.request({
      url: 'https://hanasaki.top/api/delete/book:id',
      method: 'DELETE',
      data: {
        id: e.currentTarget.dataset.id,
      },
      success: function (res) {
        console.log(res.data.msg);
        that.reloadBookList();
      }
    })
  },
  /**
   * 修改当前书籍并保存
   * put方法对应
   */
  modify: function (e) {
    let that = this;
    console.log(e.currentTarget.dataset.id);
    wx.request({
      url: 'https://hanasaki.top/api/update/book:id',
      method: 'PUT',
      data: {
        id: e.currentTarget.dataset.id,
        book_price: '88.0'
      },
      success: function (res) {
        console.log(res.data.msg);
        that.reloadBookList();
      }
    })
  }
});