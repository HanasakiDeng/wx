// my.js
import {Config} from '../../utils/config.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        rightIcon: `${Config.localIconImagePath}right@3x.png`,
        menuList: [
            {
                icon: `${Config.localIconImagePath}deposit@3x.png`,
                text: '我的押金',
                url: '../my-deposit/my-deposit',
                desc: '200.0'
            },
            {
                icon: `${Config.localIconImagePath}pending@3x.png`,
                text: '待收货',
                url: '../pending/pending',
                desc: ''
            },
            {
                icon: `${Config.localIconImagePath}using@3x.png`,
                text: '使用中',
                url: '../using/using',
                desc: ''
            },
            {
                icon: `${Config.localIconImagePath}order@3x.png`,
                text: '我的订单',
                url: '../my-order/my-order',
                desc: ''
            },
            {
                icon: `${Config.localIconImagePath}using@3x.png`,
                text: '管理人员',
                url: '../using/using',
                desc: ''
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let self = this;
        wx.getUserInfo({
            success: function (res) {
                console.log("获取用户信息成功");
                let userInfo = res.userInfo
                let nickName = userInfo.nickName
                let avatarUrl = userInfo.avatarUrl
                console.log(userInfo);
                self.setData({
                    user: {
                        nickName: nickName,
                        header: avatarUrl
                    }


                })
            }
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

    },
    makecall: function () {
        wx.makePhoneCall({
            phoneNumber: '8888888888' //仅为示例，并非真实的电话号码
        })
    }
})