/**
 * @class 弹框类
 * 
 */
class MyDialog {
  /**
   * @constructor Dialog构造函数
   * @params context 页面上下文
   * @params options 参数
   *   
   */
  constructor(pageContext, options) {
    this.context = pageContext;
    this.res = {
      cancel: false,
      confirm: false
    }
    options.showDialogStatus = true;
    this.dialog = options;
    this.success = options.success;

    // 取消按钮点击事件
    this.context.cancel = this.cancel.bind(this);

    // 确定按钮点击事件
    this.context.confirm = this.confirm.bind(this);


    this.context.setData({
      dialog: this.dialog
    })
  }
  hideDialog() {
    this.context.setData({
      dialog: {
        showDialogStatus: false
      }
    })
  }
  cancel() {
    this.res = {
      cancel: true,
      confirm: false
    }
    this.success(this.res);
  }
  confirm() {
    this.res = {
      cancel: false,
      confirm: true
    }
    this.success(this.res);
  }
}
export default MyDialog;