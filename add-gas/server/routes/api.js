let express = require('express');
let router = express.Router();
let formidable =require('formidable')
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
    let form =  new formidable.IncomingForm();

    form.encoding = 'utf-8'; // 编码
    form.keepExtensions = true; // 保留扩展名
    form.maxFieldsSize = 2 * 1024 * 1024; // 文件大小
    form.uploadDir = '../public/images/upload'; // 存储路径
    form.parse(req,function(err,fileds,files){ // 解析 formData数据
        if(err){ return console.log(err) }

        let imgPath = files.img.path // 获取文件路径
        let imgName = "./test." + files.img.type.split("/")[1] // 修改之后的名字
        let data = fs.readFileSync(imgPath) // 同步读取文件

        fs.writeFile(imgName,data,function(err){ // 存储文件

            if(err){ return console.log(err) }

            fs.unlink(imgPath,function(){}) // 删除文件
            res.json({code:1})
        })
    })







    // var uploadDir = path.normalize(__dirname+'/'+"../avatar");
    // form.uploadDir = uploadDir;
    // var base64Data = req.files.replace(/^data:image\/\w+;base64,/, "");
    // var dataBuffer = new Buffer(base64Data, 'base64');
    // fs.writeFile("image.png", dataBuffer, function(err) {
    //     if(err){
    //         res.send(err);
    //     }else{
    //         res.send("保存成功！");
    //     }
    // });
    const fileUrl = new URL(req.files.image.path);
    console.log(fileUrl);
    fs.readFile(req.files.image.path,'binary',function(err,  file) {
        if (err) {
            console.log(err);
        } else {
            res.end();
        }
    });

});
module.exports = router;
//定义一个buffer数组
const buffer = Buffer.alloc(10);
