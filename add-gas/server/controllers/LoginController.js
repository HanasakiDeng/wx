let axios = require('axios');
let Constants = require('../common/constants');

class LoginController {

    getOpenId(req, res, next) {
        if (res.body) {
            axios.get(Constants.WX_BASE_URL, {
                params: {
                    appid: Constants.APP_ID,
                    secret: Constants.APP_SECRET,
                    js_code: req.body.code,
                    grant_type: 'authorization_code'
                }
            })
                .then(function (res) {
                    console.log(res);
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    }
}

module.exports = LoginController;
