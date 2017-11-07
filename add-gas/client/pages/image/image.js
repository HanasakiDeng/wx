// pages/image/image.js
import { Base } from '../../utils/base.js';
import { Config } from '../../utils/config.js';
let base = new Base();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  chooseImage: function (e) {
    let that = this;
    let regExp = /(gif|png|jpg|jpeg|bmp)/;
    console.log(e);
    wx.chooseImage({
      count: 1,
      success: function (res) {
        if (res) {
          // 图片文件路径
          let imagePath = res.tempFiles[0].path;
          //择取图片或者文件后缀名
          let suffix = imagePath.substring(imagePath.lastIndexOf('.') + 1);
          console.log(suffix);
          var reg = /.*\/([^\.\/]+)/g;
          let hasRightPar = regExp.test(suffix);
          console.log(imagePath);
          that.setData({
            imgPath: imagePath
          })
          if (hasRightPar) {
            wx.uploadFile({
              url: Config.UPLOAD_URL,
              filePath: imagePath,
              name: 'image',
              formData: {
                imgId: '1',
                imgName: 'test'
              },
              success: function (res) {
                console.log(res);
              },
              fail: function (res) {
                console.log(res);
              }
            })
          } else {
            wx.showModal({
              title: '温馨提示',
              content: '文件格式有误',
            })
          }
        }
      },
    })
  },
  shot: function (e) {
    wx.chooseVideo({
      sourceType: ["camera"],
      success: function (res) {
        console.log(res);
      }
    })
  }

})