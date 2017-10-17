
const Config ={
    // 微信小程序 App ID
    appId: 'wx818dad1507c9de8b',

    // 微信小程序 App Secret
    appSecret: 'd5f850bc18e9dff843d7a4ed71145261',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql:function (dbName) {
        return {
            host: 'localhost',
            port: 3306,
            user: 'root',
            db: dbName, //'cAuth',
            pwd: '',
            char: 'utf8mb4'
        }

    },


}
module.exports = Config;