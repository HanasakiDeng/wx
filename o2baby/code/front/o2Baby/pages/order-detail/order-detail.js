// order-detail.js
import {OrderDetailModel} from 'order-detail-model.js';

let orderDetailModel = new OrderDetailModel();
let modalItem = {
    showModalStatus: false,
    selfBtnStyle: "unselect-btn",
    expressBtnStyle: "select-btn",
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        modalItem: modalItem,
        getWay: ['自取', '快递'],
        sendDate: orderDetailModel.getNowDate(),
        goodInfo: {
            name: '产品名称最多不超过12个字',
            style: 'A',
            capacity: '12',
            usetime: '48',
            place: '宾馆等固定'
        },
        defDate: orderDetailModel.formatDate(new Date()),
        way: '自取',
    },
    toAddAddress: function () {
        console.log(122222)
        wx.navigateTo({
            url: '../add-address/add-address',
            success: function () {
                console.log(10);
            }
        })
    },
    bindDateChange: function (e) {
        console.log(e.detail.value);
        let date = e.detail.value.split('-');
        this.setData({
            sendDate: date[1] + "月" + date[2] + '日'
        });
    },
    /**
     * 自取按钮点击背景替换
     */
    bindChangeSelfStyle: function () {
        let way = this.data.getWay[0];
        this.data.modalItem.selfBtnStyle = "select-btn";
        this.data.modalItem.expressBtnStyle = "unselect-btn";
        this.setData({
            way: way,
            modalItem: this.data.modalItem
        })
    },
    /**
     * 快递按钮点击背景替换
     */
    bindChangeExpressStyle: function () {
        let way = this.data.getWay[1];
        this.data.modalItem.selfBtnStyle = "unselect-btn";
        this.data.modalItem.expressBtnStyle = "select-btn";
        this.setData({
            way: way,
            modalItem: this.data.modalItem
        })
    },
    /**
     * 显示或隐藏模态框
     */
    showOrHideModal: function () {
        this.data.modalItem.showModalStatus = !this.data.modalItem.showModalStatus

        this.setData({
            modalItem: this.data.modalItem
        });
    },
    /**
     * 关闭弹框,并显示快递方式
     */
    bindConfrimData: function () {
        let way = this.data.way;
        console.log(way);
        this.data.modalItem.showModalStatus = !this.data.modalItem.showModalStatus
        this.setData({
            way: way,
            modalItem: this.data.modalItem
        });

    },
    confirmPay: function (e) {
        wx.navigateTo({
            url: '../pay-success/pay-success',
        })
        wx.requestPayment({
            'timeStamp': (new Date()).getTime / 1000 + '',
            'nonceStr': '',
            'package': '',
            'signType': 'MD5',
            'paySign': '',
            success: () => {

            }
        })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(options);
      this.setData({
        order:JSON.parse(options.order)
      })
        let d1 = new Date();
        let d2 = new Date(d1);
        d2.setFullYear(d2.getFullYear() + 1);
        d2.setDate(d2.getDate() - 1);

        console.log(d2);
        this.setData({
            setMonth: new Date().getMonth() + 1,
            setDay: new Date().getDay(),
            endDate: d2
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
    imgLoadError:function(e){
      console.log("图片加载中");
    }
})