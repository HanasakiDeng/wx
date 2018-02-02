
/**
 * 获取轮播图片路径列表共通方法
 * @params cb 回调成功函数 
 */
function getImageList(cb) {
  wx.request({
    url: '轮播图片的url',
    data: '请求参数',
    method: '请求方法',
    dataType: 'json',
    success: typeof cb == 'function' && cb(res.data),
    fail: () => {
      console.log('获取失败');
    }
  })
}
// 显示繁忙提示
var showBusy = text => wx.showToast({
  title: text,
  icon: 'loading',
  duration: 10000
})
// 显示成功提示
var showSuccess = text => wx.showToast({
  title: text,
  icon: 'success'
})
module.exports = {
  getImageList: getImageList,
  showBusy: showBusy,
  showSuccess: showSuccess
}


