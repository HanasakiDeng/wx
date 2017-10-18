const Config = require('./gas_config');
const shortId = require('shortid');

class TUser {
    constructor() {
        this.tableName = 'user';
    }

    /**
     *根据openId查询用户是否存在
     * @param openId 微信用户小程序唯一识别码
     * @returns {Promise}  返回knex Promise对象
     */
    queryUserIsExitByUserId(openId) {
        return Config.GasDB(this.tableName).count('user_id as num').where('user_id', openId).catch(function (err) {
            console.error(`查询用户是否存在错误: ${err}`)
        });
    }

    /**
     * 用户表插入操作
     * @param openId
     * @returns {Promise.<T>|*}
     */

    insertUser(openId) {
        return Config.GasDB(this.tableName).insert({
            user_id: openId,
            invite_code: shortId.generate(),
            created_at: 'NOW()'
        }).catch(function (err) {
            console.error(`插入用户存在错误: ${err}`)
        });
    }

    /**
     * 用户表用户信息更新 依据微信接口getUserInfo
     * @param openId
     * @param field {nickname,avatarUrl}
     */
    updateUserInfoByUserId(openId, field) {
        return Config.GasDB(this.tableName).where('user_id', openId).update({
            nickname: field.nickname,
            image_url: field.avatarUrl,
            update_at: 'NOW()'
        });
    }

    /**
     * 用户表手机绑定更新
     * @param openId
     * @param mobile
     */
    updateMobileByUserId(openId, mobile) {
        return Config.GasDB(this.tableName).where('user_id', openId).update({
            mobile: mobile,
            update_at: 'NOW()'
        });
    }
}

module.exports = TUser;