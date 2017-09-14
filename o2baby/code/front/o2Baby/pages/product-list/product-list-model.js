import { Base } from '../../utils/base.js';
import { Config } from '../../utils/config.js';
/**
 * @class 
 * 产品列表处理层类
 * 1,服务器获取产品列表数据 
 * 2,加入购物车的操作
 * 
 */
export class ProductListModel extends Base {
  constructor() {
    super();
    this.productList = 'productList';
  }
  /**
   * 获取产品列表信息从服务器
   * @param success 获取成功的回调 
   */
  getDataFromServer(success) {
    let params = {
      url: Config.productListUrl,
      success: success
    }
    this.request(params);
  }
  

}