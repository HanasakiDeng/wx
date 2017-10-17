// pages/tpls/promotion-tpls/promotion-tpl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasDraw: false,
    startPoint: {
      x: 0,
      y: 0,
    },
    movePoint: {
      x: 0,
      y: 0
    },
    ctx: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const ctx = wx.createCanvasContext('scratchBottomLayout');
    const ctx = wx.createCanvasContext('scratchTopLayout');
    this.data.ctx = ctx;
    ctx.fillRect(20, 20, '100%', 250);
    ctx.draw()
  },
  start: function (e) {
    console.log('start')
    console.log(e.touches[0]);
    if (e.changedTouches) {
      this.data.startPoint.x = e.touches[0].x;
      this.data.startPoint.y = e.touches[0].y;
    }
  },
  move: function (e) {
    console.log('move');
    const ctx = this.data.ctx;
    console.log(e.changedTouches[0]);
    if (!this.data.hasDraw) {

    }
    // ctx.setGlobalAlpha(0);
    if (e.changedTouches) {
      ctx.clearRect(10, 10, 150, 75)

    }
  },
  end: function (e) {
    console.log('end')
    // console.log(e.changedTouches[0])

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

  }
})