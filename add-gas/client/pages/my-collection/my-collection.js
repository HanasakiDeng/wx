// pages/my-collection/my-collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    offsetDelX: 3.4,
    offsetX: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  touchStart: function (e) {
    console.log("touchStart");
    if (e.touches.length == 1) {
      console.log(e.touches[0].pageX);
      this.setData({
        startX: e.touches[0].pageX
      })
    }
  },
  touchMove: function (e) {
    console.log("touchMove");
    if (e.touches.length == 1) {
      console.log(e.touches[0].pageX);
      let offsetX = parseInt(e.touches[0].pageX) - parseInt(this.data.startX);
      if (offsetX > 35) {
        this.setData({
          offsetDelX: 3.4,
          offsetX: 0
        });
      } else {
        this.setData({
          offsetDelX: 0,
          offsetX: -3.4
        });
      }
    }
  },
  touchEnd: function (e) {
    console.log(e);
  },
})