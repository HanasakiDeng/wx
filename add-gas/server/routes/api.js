let express = require('express');
let router = express.Router();
let multipart = require('connect-multiparty');
let multipartMiddleware = multipart();
let path = require('path');
let fs = require('fs');
let {URL} = require('url');
let AddGasController = require('../controllers/tabs/AddGasController');
let addGasController = new AddGasController();

router.get('/', function (req, res, next) {
    addGasController.getGasStationList(req, res, next);
});

router.post('/upload', multipartMiddleware, function(req,res,next){
    console.log(req.body);
    console.log(req.files);
    const fileUrl = new URL(req.files.image.path);
    console.log(fileUrl);
    fs.readFile(req.files.image.path,'binary',function(err,  file) {
        if (err) {
            console.log(err);
        } else {
            console.log("输出文件");
            res.end();
        }
    });
    if (req.files) {
        res.send('文件上传成功');
        console.log(req.files);
        console.log(req.body);
    }
});
module.exports = router;
//定义一个buffer数组
const buffer = Buffer.alloc(10);
