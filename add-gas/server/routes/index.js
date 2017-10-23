let express = require('express');
let router = express.Router();
let TokenController = require('../controllers/TokenController');
let tokenController = new TokenController();

router.post('/', function (req, res, next) {
    tokenController.doToken(req, res, next);

});
module.exports = router;
