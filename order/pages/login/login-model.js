import { Base } from '../../utils/base.js';
import { Config } from '../../utils/config.js';
let index = 0;
const urlMaps = new Map([
  ['CUSTOMER_LIST', Config.customerUrl], //缓存客户列表
  ['SEND_METHOD', Config.getSendMethodUrl], //缓存配送方式
  ['WORK_AREA', Config.getWorkAreaUrl], //缓存作业区
  ['SALE', Config.getSaleUrl], //缓存业务员
  ['PLAN_TYPE', Config.getPlanTypeUrl] //计划类型
])
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
        wx.setStorageSync("HAS_LOGIN", true);
        wx.setStorageSync('ROLE', res.role);
        wx.setStorageSync('USERANME', user.username);
        wx.setStorageSync('PASSWORD', user.password);
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
        });
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
      urlMaps.forEach((key, value) => {
        console.log(key + value);
        self.localStorage(key, value, res.role);
      })
    } catch (e) {
      console.log(e);
    }
  }
  //服务器请求数据,并本地缓存
  localStorage(url, key, role) {
    console.log(url);
    let params = {
      method: "GET",
      url: url,
      success: (res) => {
        wx.setStorageSync(key, res);
        console.log('存储了' + key);
        index++;
        console.log(index)
        if (index === 5) {
          switch (role) {
            case '1086': wx.redirectTo({
              url: '../order-list/order-list',
            }); index = 0; break;
            case '1000': wx.redirectTo({
              url: '../examine/examine',
            }); index = 0; break;
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