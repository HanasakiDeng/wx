let express = require('express');
let router = express.Router();
let AddGasController = require('../controllers/tabs/AddGasController');
let TokenController = require('../controllers/TokenController');
let addGasController = new AddGasController(),
    tokenController = new TokenController();

router.post('/', function (req, res, next) {
    tokenController.doToken(req, res, next);
    // addGasController.getGasStationList(req, res, next);
});
/**
 * 登录入口
 */
// router.post('/login', function (req, res, next) {
//     console.log('登录接口ing');
//     loginController.getOpenId(req, res, next);
// });


module.exports = router;
