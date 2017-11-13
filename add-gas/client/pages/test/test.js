// map.js
import Dialog from '../components/dialog/dialog.js';
Page({
  data: {
  },
  onLoad() {
    let dialog = new Dialog(this, {
      content: '您确定要删除此数据么？',
      title: '温馨提示',
      iconType: 'warn',
      success: (res) => {
        if (res.confirm) {
          console.log('您点击了确定按钮');
          dialog.showDialog();
        }
        if (res.cancel) {
          dialog.hideDialog();
        }
      }
    })
  },
})