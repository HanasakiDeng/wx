let express = require('express');
let router = express.Router();
let multipart = require('connect-multiparty');
let multipartMiddleware = multipart();
let path = require('path');
let AddGasController = require('../controllers/tabs/AddGasController');
let addGasController = new AddGasController();

router.get('/', function (req, res, next) {
    addGasController.getGasStationList(req, res, next);
});

router.post('/upload', multipartMiddleware, function(req,res,next){
    console.log(req.body);
    console.log(req.files);
    console.log();
    if (req.file) {
        res.send('文件上传成功');
        console.log(req.file);
        console.log(req.body);
    }
});
module.exports = router;
