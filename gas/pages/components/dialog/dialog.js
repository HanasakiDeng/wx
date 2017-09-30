/**
 * @class 弹框类
 * @author Gary Deng
 * 类似微信小程序 Modal
 * 1,当有标题时
 *   ->可支持图标显示,图标所用组件为icon
 * 2,当为
 * 
 */
class Dialog {
  /**
   * @constructor Dialog构造函数
   * @params context 页面上下文
   * @params options 参数
   * @parmas options.title 弹框标题,非必填
   * @params options.iconType 图标类型,支持微信小程序中icon所有图标,非必填
   * @params options.iconColor 图标颜色,支持css中的所有颜色表示,非必填
   * @params options.content 弹框内容,必填
   * @params options.showCancel 是否显示取消按钮,默认为true ,非必填
   * @params options.cancelText 取消按钮文字 默认为取消,最好不要超过四个字,否则为省略号表示,非必填
   * @params options.cancelColor 取消按钮文字颜色 默认为 #373c3f ,非必填
   * @params options.confirmText 确定按钮文字 默认为确定,最好不要超过四个字,否则为省略号表示,非必填
   * @params options.confirmColor 取消按钮文字颜色 默认为 #fff,非必填
   * @params options.success 成功回调事件, 返回参数 res:{cancel:Boolean,confirm:Boolean}
   *         当cancel 为true时代表点击了[取消]按钮,当confirm 为 true 代表点击了[确定]按钮
   *         必填
   *   
   */
  constructor(pageContext, options) {
    options.showDialogStatus = true;
    this.context = pageContext;
    this.options = options;
    // 默认显示取消按钮
    if (!options.hasOwnProperty('showCancel')) {
      options.showCancel = true;
    }
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
  // 隐藏弹框
  hideDialog() {
    this.context.setData({
      dialog: {
        showDialogStatus: false
      }
    })
  }
  // 检测取消按钮
  cancel() {
    this.res = {
      cancel: true,
      confirm: false
    }
    this.success(this.res);
  }
  // 检测确认按钮
  confirm() {
    this.res = {
      cancel: false,
      confirm: true
    }
    this.success(this.res);
  }
}
export default Dialog;