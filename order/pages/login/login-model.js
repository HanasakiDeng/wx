import { Base } from '../../utils/base.js';
import { Config } from '../../utils/config.js';
let index = 0;
class LoginModel extends Base {
  constructor() {
    super();
  }
  // 登录请求处理 user 为传递对象 {username:'',password:''}
  loginRequest(user) {
    let params = {
      method: "POST",
      url: Config.loginUrl,
      data: user,
      success: (res) => {
        wx.showLoading({
          title: '登录中',
        })
        setTimeout(function () {
          wx.hideLoading()
        }, 2000)
        this.execStoreUser(res, user);
      },
      fail: (msg) => {
        console.log(msg);
        wx.showModal({
          content: msg,
          showCancel: false
        })
      },
    }
    console.log(user);
    this.request(params);

  }
  //登录成功情况下,用户信息本地保存
  execStoreUser(res, user) {
    let self = this;
    try {
      wx.setStorageSync("TOKEN", res['access-token']);
      this.localStorage(Config.customerUrl, 'CUSTOMER_LIST',res.role); //缓存客户列表
      this.localStorage(Config.getSendMethodUrl, 'SEND_METHOD',res.role); //缓存配送方式
      this.localStorage(Config.getWorkAreaUrl, 'WORK_AREA', res.role);  //缓存作业区
      this.localStorage(Config.getSaleUrl, 'SALE', res.role); //缓存业务员
      this.localStorage(Config.getPlanTypeUrl, 'PLAN_TYPE', res.role) //计划类型
    } catch (e) {
      console.log(e);
    }
  
  }
  //服务器请求数据,并本地缓存
  localStorage(url, key,role) {
    console.log(url);
    let params = {
      method: "GET",
      url: url,
      success: (res) => { 
        wx.setStorageSync(key, res);
        console.log('存储了'+key);
        index++;
        console.log(index);
        if(index >= 5 ){
          switch (role) {
            case '1086': wx.navigateTo({
              url: '../order-list/order-list',
            }); break;
            case '1000': wx.navigateTo({
              url: '../examine/examine',
            }); break;
            default: break;
          }
        }
      },
      fail: (msg) => {
        console.log(msg);
      },
    }
    this.request(params);
  }

}
export { LoginModel }