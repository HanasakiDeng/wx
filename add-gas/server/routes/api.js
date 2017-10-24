let express = require('express');
let router = express.Router();
let AddGasController = require('../controllers/tabs/AddGasController');
let addGasController = new AddGasController();

router.get('/', function (req, res, next) {
    addGasController.getGasStationList(req, res, next);
});
module.exports = router;
