import {Base} from '../../utils/base.js';
import {Config} from '../../utils/config.js';
import {Cart} from '../cart/cart-model.js';

let cart = new Cart();

/**
 * @class 首页类
 * 扫码操作
 * 确认登录状态
 */
class Home extends Base {
    constructor() {
        super();
    }

    /**
     * 确认登录状态
     */
    checkLoginStatus() {
        wx.checkSession({
            success: function () {
                //session 未过期，并且在本生命周期一直有效
                console.log('登录中');
            },
            fail: function () {
                //登录态过期
                wx.login() //重新登录
            }
        })
    }

    /**
     * 扫码部分操作
     */
    scanCode(callback) {
        wx.scanCode({
            success: (res) => {
                console.log(res);
                let iden = res.result.split('=')[1];
                iden = '123456781';
                console.log(iden);
                typeof callback === 'function' && callback(iden);
            },
            fail: (err) => {
                console.log(err);
            }
        })
    }

    /**
     * 扫码获取产品信息
     */
    getProductInfo(iden, callback) {
        let params = {
            url: Config.scanUrl + iden,
            success: (res) => {
                if (res.product_status === 1) {
                    cart.add(res.type, 1);
                    wx.showToast({
                        title: '成功加入购物车',
                        duration: 2000
                    });
                    typeof callback === "function" && callback();
                } else {
                    console.log('已被用');
                    wx.navigateTo({
                        url: '../order-status/order-status',
                    })
                }


            }
        }
        this.request(params, false);
    }

    /**
     * 获取总数
     */
    getTotalCounts() {
        return cart.getCartTotalCounts();
    }

}

export {Home};