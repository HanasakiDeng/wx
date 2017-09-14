import {Base} from '../../utils/base.js';
import {Config} from '../../utils/config.js';
import {Validate} from '../../utils/validator.js';

class AddAddressModel extends Base {

    constructor() {
        super();
    }

    /**
     * 添加收货地址到服务器
     * @param  data 提交数据
     */
    addAddressToServer(data) {
        let params = {
            url: Config.addressUrl,
            method: "POST",
            data: data,
            success: (res) => {
                console.log(res);
                if (res.errorCode === 0) {
                    wx.redirectTo({
                        url: '../order-detail/order-detail'
                    })
                }
                console.log(res);
            }
        }
        this.request(params, false);
    }

    /**
     * 检证字段
     */
    checkField(params, callback) {

        let errorList = new Set();
        let hasError = false;

        //字段对应,便于输出对应错误信息
        let fieldMap = new Map([
            ['name', '收货人'],
            ['mobile', '手机'],
            ['province', '收货地区'],
            ['city', '收货地区'],
            ['country', '收货地区'],
            ['detail', '详细地址']
        ]);
        //遍历 表单数据对象,检证处理
        for (let item in params) {
            if (Validate.required(params[item])) {
                let error = this.requiredError(fieldMap.get(item));
                errorList.add(error);
                hasError = true;
            } else {
                if (item === 'mobile') {
                    if (!Validate.mobile(params[item])) {
                        errorList.add('您输入的手机号码有误');
                        hasError = true;
                    }
                }
            }
        }
        let errors = [];
        for (let error of errorList.values()) {
            errors.push(error);
        }
        return callback(hasError, errors[0]);
    }

    /**
     * 必填字段错误信息
     * @param field 字段文字描述
     */
    requiredError(field) {
        return `${field}是必须的`;
    }

}

export {
    AddAddressModel
}