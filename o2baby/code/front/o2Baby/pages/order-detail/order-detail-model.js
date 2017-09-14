import {Base} from '../../utils/base.js';

class OrderDetailModel extends Base {
    constructor() {
        super();
    }
    /**
     * 
     */
    initView(page){

    }
    /**
     * 
     */
    initData(page){

    }

    /**
     * 获取日期 格式为 yyyy-mm-dd
     * @param date
     * @returns {string}
     */
    formatDate(date) {
        let year = date.getFullYear();
        let monthTemp = date.getMonth() + 1;
        let dayTemp = date.getDate();
        let month = monthTemp > 9 ? monthTemp : '0' + monthTemp;
        let day = dayTemp > 9 ? dayTemp : '0' + dayTemp;
        return [year, month, day].map((n) => {
            return n.toString();
        }).join('-');
    }

    /**
     * 获取时间  格式为 mm月dd日
     * @returns {string} 时间格式
     */
    getNowDate() {
        let now = new Date();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        return `${month}月${day}日`;

    }
}

export {OrderDetailModel}
