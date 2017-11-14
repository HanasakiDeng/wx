// pages/components/toast/toast.js
class Toast {
  constructor() {
    let currentPage = getCurrentPages()[getCurrentPages().length - 1];
    currentPage.setData({
      showToast: false
    })
  }
}
export { Toast };