// pages/api/request/upload/upload.js
Page({
  uploadImageToServer: function (e) {
    let that = this;
    console.log(e);
    wx.chooseImage({
      count: 1,
      success: function (res) {
        console.log(res);
        //显示所选择的图片
        that.setData({
          imgPath: res.tempFilePaths[0]
        })

        wx.uploadFile({
          url: 'https://hanasaki.top/api/upload/images',
          filePath: res.tempFilePaths[0],
          name: (new Date()).toString(),
          success: function (res) {
            console.log(res);
          }
        })
      },
    })
  }

})