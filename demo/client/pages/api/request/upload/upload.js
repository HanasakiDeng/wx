// pages/api/request/upload/upload.js
Page({
  data: {

  },

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
        const uploadTask= wx.uploadFile({
          url: 'https://hanasaki.top/api/upload/images',
          filePath: res.tempFilePaths[0],
          name: "test",
          success: function (res) {
            console.log(res);
          },
          fail:function(err){
           console.error(err);
          }
        })
        uploadTask.onProgressUpdate((res) => {
          console.log('上传进度', res.progress)
          console.log('已经上传的数据长度', res.totalBytesSent)
          console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
        })
      },
    })
  }


})