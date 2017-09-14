// product-list.js
import { ProductListModel } from 'product-list-model.js';
let productListModel = new ProductListModel();
const MAX_NUM = 20;
let numList = [];
for (let index = 1; index <= MAX_NUM; index++) {
  numList.push(index);
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModalStatus: false,
    optionsNum: numList,
    userBuyNum: 0
  },
  toOrderDetail: function (e) {
    let selectProduct = productListModel.getDataSet(e, 'item');
    this.data.selectProduct = selectProduct;
    console.log(selectProduct);
    this.setData({
      showModalStatus: true,
    })
  },
  addToCart: function (e) {
    this.setData({
      showModalStatus: true
    });
  },
  /**
   * 获取用户购买数量
   */
  bindNumChange: function (e) {
    let selectIndex = e.detail.value;
    let selectNum = this.data.optionsNum[selectIndex];
    console.log(selectNum);
    this.setData({
      userBuyNum: selectNum
    })
  },
  /**
   * 加入购物车表单提交
   */
  bindConfrimData: function (e) {
    this.setData({
      showModalStatus: false
    });
    let orderNumber = (this.data.userBuyNum > 0) ? this.data.userBuyNum : 1;
    this.data.selectProduct.orderNumber = this.data.userBuyNum;

    wx.navigateTo({
      url: `../order-detail/order-detail?order=${JSON.stringify(this.data.selectProduct)}`

    })
    console.log(this.data.userBuyNum);
  },
  /**
   * 隐藏模态框
   */
  hideModal: function () {
    this.setData({
      showModalStatus: false,
      loading: true
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    productListModel.getDataFromServer(function (res) {
      for (let item of res) {
        item.product_img = 'https://gd4.alicdn.com/imgextra/i4/270846493/TB2SgpztVXXXXa6XpXXXXXXXXXX_!!270846493.jpg'
      }
      self.setData({
        hidden: true,
        productList: res,
        loading: true
      });
    });

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
    this.setData({
      hidden: false
    })
    wx.showLoading({
      title: '加载中',
    })
    let self = this;
    productListModel.getDataFromServer(function (res) {
      wx.hideLoading();
      for (let item of res) {
        item.product_img = 'https://gd4.alicdn.com/imgextra/i4/270846493/TB2SgpztVXXXXa6XpXXXXXXXXXX_!!270846493.jpg'
      }
      self.setData({
        hidden: true,
        productList: res,
        hideView: true
      });
    });

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
    wx.showShareMenu({

    })
  }
})