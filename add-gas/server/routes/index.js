let express = require('express');
let router = express.Router();
let AddGasController = require('../controllers/tabs/AddGasController');
let LoginController = require('../controllers/LoginController');
let addGasController = new AddGasController(),
    loginController = new LoginController();
/**
 * 登录入口
 */
router.get('/login', function (req, res, next) {
    loginController.getOpenId(req, res, next);
});
router.get('/', function (req, res, next) {
    addGasController.getGasStationList(req, res, next);
});


module.exports = router;
