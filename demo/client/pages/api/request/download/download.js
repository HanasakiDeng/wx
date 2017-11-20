// pages/api/request/download/download.js
Page({

  download: function (res) {
    let that = this;
    const downloadTask = wx.downloadFile({
      url: 'https://hanasaki.top/upload/images/demo.zip',
      success: (res) => {
        console.log(res);
        
      }
    });
    downloadTask.onProgressUpdate((res) => {
      this.setData({
        progress: res.progress
      })
      console.log('下载进度', res.progress)
      console.log('已经下载的数据长度', res.totalBytesWritten)
      console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
    })
  }
})