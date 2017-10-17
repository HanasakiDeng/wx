
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
module.exports = {
  getImageList: getImageList
}


