// pages/car/service-catalog/service-catalog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrayService: [
      {
        bgUrl: '../../../images/car.jpg',
        iconUrl: '../../../images/icon/wash-car.png',
        name: '洗车'
      },
      {
        bgUrl: '../../../images/car.jpg',
        iconUrl: '../../../images/icon/beauty.png',
        name: '美容'
      },
      {
        bgUrl: '../../../images/car.jpg',
        iconUrl: '../../../images/icon/maintain.png',
        name: '保养'
      },
      {
        bgUrl: '../../../images/car.jpg',
        iconUrl: '../../../images/icon/repaire.png',
        name: '维修'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let serviceType = options.serviceType;
    this.setServiceType(serviceType);
  },

  setServiceType: function (serviceType) {
    serviceType = parseInt(serviceType);
    this.setData({
      service: this.data.arrayService[serviceType - 1]
    })
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