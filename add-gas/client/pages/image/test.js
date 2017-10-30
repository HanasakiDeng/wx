
Page({
  ontakephotos: function (e) {

    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      //sourceType: ['camera'],
      success: (res) => {
        let filesize = res.tempFiles[0].size;//上传的图片大小
        let imagePath = res.tempFiles[0].path;//上传的图片路径
        let suffix = imagePath.substring(imagePath.lastIndexOf('.') + 1);//图片后缀名
        let regexp = /(gif|png|jpg|jpeg|bmp|JPG|JPEG)/;
        //let regexp = /^.*?\.(jpg|jpeg|bmp|gif|JPG|JPEG)$/;
        let rightpic = regexp.test(suffix);

        console.log("rightpic:" + rightpic);
        if (!rightpic) {
          wx.showToast({
            title: '图片格式不对',
            icon: 'success',
            duration: 2000
          })
          return;
        }
        if (filesize > 1024 * 1000 * 2) {
          wx.showToast({
            title: '图片超过2M',
            icon: 'success',
            duration: 2000
          })
          return;
        }

        var tempFilePaths = res.tempFilePaths;

        wx.showModal({
          title: '上传',
          content: '确定上传发票',
          success: res => {
            const url = define.Global

              .domain + "/wechartfileUpload.do";
            this.uploadTask = wx.uploadFile({
              url: url,
              filePath: tempFilePaths[0],
              name: 'fileInput',
              formData: {
              },
              success: (res) => {
                invoice = JSON.parse(res.data).picUrl;
                console.log(invoice);
              },
              fail: function (res) {
                wx.showToast({
                  title: '上传失败',
                })
              }
            })
            this.uploadTask.onProgressUpdate((res) => {
              wx.showLoading({
                title: "" + res.progress + "%",
                mask: true
              })
              if (100 == res.progress) {
                wx.showToast({
                  title: '上传成功',
                })
              }
            })
          }
        })
      },
    })
  }

})
