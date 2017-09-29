// map.js
import MyDialog from '../tpls/dialog/dialog.js';
Page({
  data: {
  },
  onLoad() {
    new MyDialog(this, {
      content: '测试文本',
      confirmText: '确定',
      cancelText: '取消',
      success: (res) => {
        if(res.confirm){
          console.log('您点击了确定按钮');
        }
        if(res.cancel){
          console.log('您点击了取消按钮');
        }
      }
    })
  },
})