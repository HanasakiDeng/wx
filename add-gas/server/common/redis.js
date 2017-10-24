let redis = require('redis'),
    client = redis.createClient({
        host: '127.0.0.1',
        port: 6379,
        retry_strategy: function (options) {
            if (options.error && options.error.code === 'ECONNREFUSED') {
                // End reconnecting on a specific error and flush all commands with
                // a individual error
                return new Error('The server refused the connection');
            }
            if (options.total_retry_time > 1000 * 60 * 60) {
                // End reconnecting after a specific timeout and flush all commands
                // with a individual error
                return new Error('Retry time exhausted');
            }
            if (options.attempt > 10) {
                // End reconnecting with built in error
                return undefined;
            }
            // reconnect after
            return Math.min(options.attempt * 100, 3000);
        }
    });

class RedisClient {
    /**
     * 设置Session
     * @param tokenId
     * @param openId
     */
    static set(tokenId, openId) {
        client.hmset(tokenId, {openId: openId}, function (err) {
            console.log(err);
            if (err === null) {
                console.log('存储session成功');
            }
        })

    }

    /**
     * 获取session 对象,根据sessionId
     * @param tokenId tokenId
     * @param cb 回调
     */
    static get(tokenId, cb) {
        client.hgetall(tokenId, function (err, res) {
            typeof cb === 'function' && cb(res);
        });
    }
}

module.exports = RedisClient;