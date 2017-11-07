let Constants = require('../../common/constants/constants');
const {mysql} = require('../../config');
const config = mysql(Constants.GAS_DB_NAME);

let Config = {
    GasDB: require('knex')({
        client: 'mysql',
        connection: {
            host: config.host,
            port: config.port,
            user: config.user,
            password: config.pwd,
            database: config.db,
            charset: config.char,
            multipleStatements: true
        }
    })
};
module.exports = Config;