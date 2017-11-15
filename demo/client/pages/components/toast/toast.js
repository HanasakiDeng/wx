// pages/components/toast/toast.js
class Toast {
  constructor(msg) {
    //获取当前页面page对象
    let currentPage = getCurrentPages()[getCurrentPages().length - 1];
    //设置toast 对象 
    currentPage.setData({
      msg: msg
    })
  }
}
export { Toast };