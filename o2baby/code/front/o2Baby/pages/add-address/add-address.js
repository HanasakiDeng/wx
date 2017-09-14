// add-address.js

import {AddAddressModel} from 'add-address-model.js';

let addAddressModel = new AddAddressModel();
Page({

    /**
     * 页面的初始数据
     */
    data: {},

    bindRegionChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            region: e.detail.value.join(''),
            province: e.detail.value[0],
            city: e.detail.value[1],
            country: e.detail.value[2]
        });
    },
    /**
     * 提交表单
     */
    submitAddress: function (e) {
        let self = this;
        console.log(e.detail.value);
        /**
         * 所有字段为必须
         */
        let person = {
            name: e.detail.value.name,
            mobile: e.detail.value.mobile,
            province: this.data.province,
            city: this.data.city,
            country: this.data.country,
            detail: e.detail.value.detail
        }
        addAddressModel.checkField(person, (hasError, error) => {
            if (!hasError) {
                //检证通过,调用添加收货地址接口
                addAddressModel.addAddressToServer(person);
            } else {
                self.showToast(error);
            }
        });

    },

    /**
     * 显示Toast;
     */
    showToast: function (tips) {
        this.setData({
            item: {
                showStatus: true,
                tips: error[0]
            }
        });
        setTimeout(() => {
            this.setData({
                item: {
                    showStatus: false
                }
            })
        }, 2000)
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

    }
});