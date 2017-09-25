// pages/reservation/reservation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 1,
    validTableList: [
      {
        tableNo: "108号桌",
        timeAt: '17:00',
        checked: true
      },
      {
        tableNo: "1",
        timeAt: '17:00',
        checked: false,
      }
    ]
  },
  // 选取桌号
  chooseTable: function (e) {
    var dataset = e.currentTarget.dataset;
    var validTableList = this.data.validTableList;
    var original = { index: 0, checked: false };
    console.log(dataset);
    if (dataset) {
      console.log(e.currentTarget.dataset.index);
      for (var index = 0, length = validTableList.length; index < length; index++) {
        // 将原来的选中状态保存起来
        if (validTableList[index].checked) {
          original.index = index;
          original.checked = validTableList[index].checked;
        }
      }
      //如果是同一个
      if (original.index == dataset.index) {
        validTableList[dataset.index].checked = !dataset.checked;
      } else {
        validTableList[original.index].checked = false;
        validTableList[dataset.index].checked = true;
      }
      this.setData({
        validTableList: validTableList
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if (options) {
      this.setData({
        orderType: options.orderType
      })
      switch (options.orderType) {
        case "0": wx.setNavigationBarTitle({
          title: '预定桌台'
        }); break;
        case "1": wx.setNavigationBarTitle({
          title: '预定桌台并点餐'
        }); break;
        case "2": wx.setNavigationBarTitle({
          title: '点餐自提'
        }); break;
        default: break;
      }
    }
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
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  }
})