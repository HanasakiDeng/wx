let redis = require('redis'),
    client = redis.createClient();

class Session {
    /**
     * 设置Session
     * @param sessionId
     * @param object
     */
    static set(sessionId, object) {
        client.hmset(sessionId, object, function (err) {
            if (err === null) {
                console.log('存储session成功');
            }
        })

    }

    /**
     * 获取session 对象,根据sessionId
     * @param sessionId sessionId
     * @param cb 回调
     */
    static get(sessionId, cb) {
        client.hgetall(sessionId, function (err, object) {
            typeof cb === 'function' && cb(object);
        });
    }
}

module.exports = Session;