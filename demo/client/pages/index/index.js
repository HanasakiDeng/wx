//index.js
//获取应用实例
import { Toast } from '../components/toast/toast.js'
const app = getApp()
Page({
  onLoad:function(options){
    let toast = new Toast('存储成功');
  }
})
