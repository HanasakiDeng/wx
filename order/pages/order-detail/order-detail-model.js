import { Base } from '../../utils/base.js';
import { Config } from '../../utils/config.js';

class OrderDetailModel extends Base {
  constructor() {
    super();
  }
  //获取数据
  getOrderDetailRequest(key_id, page) {
    let params = {
      url: Config.getOrderDetailUrl(key_id),
      method: 'GET',
      success: (res) => {
        console.log(res);
        for (let item in res.products) {
          let price = Number(res.products[item].FPrice).toFixed(2);
          let num = Number(res.products[item].FQty).toFixed();
          res.products[item].FPrice = price;
          res.products[item].FQty = num;
        }
        page.setData({ 
          detailInfo: res
        })
        if (res.order.FLinkman == null || res.order.FLinkman == "") {
          res.order.FLinkman = ""
        }
        if (res.order.FPhone == null || res.order.FPhone == "") {
          res.order.FPhone = ""
        }
        if (res.order.FOrgName == null || res.order.FOrgName == "") {
          page.setData({
            orgName: false
          })
        }
        if (res.order.FAddress == null || res.order.FAddress == ""){
          page.setData({
            address: false
          })
        }
        if (res.order.FMemo == null) {
          res.order.FMemo = "";
        }
        
        
        for (var index in res.products) {
          res.products[index].FQty = Math.floor(res.products[index].FQty)
          res.products[index].FItemCode.FNum = res.products[index].FQty
        }
      },
      fail: (msg) => {
        console.log(msg)
      }
    }
    this.request(params);
  }

  //订单作废
  toVoidOrder(key_id) {
    let params = {
      url: Config.toVoidOrderUrl,
      method: "POST",
      data: {
        keyid: key_id
      },
      success: (res) => {
        console.log("订单已作废");
        wx.redirectTo({
          url: '../order-list/order-list',
        })
      },
      fail: (msg) => {
        console.log(msg);
        wx.showModal({
          content: msg,
          showCancel: false
        })
      },
    }
    this.request(params);
  }
}
export { OrderDetailModel }