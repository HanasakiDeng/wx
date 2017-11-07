let express = require('express'),
    router = express.Router(),
    TokenController = require('../controllers/TokenController'),
    tokenController = new TokenController();

router.post('/', function (req, res, next) {
    tokenController.doToken(req, res, next);

});
module.exports = router;
