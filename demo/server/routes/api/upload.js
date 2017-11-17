var express = require('express');
var router = express.Router();
var fs = require('fs');
var path= require("path");
var formidable = require('formidable');


router.post('/images',function(req,res,next){
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    //设置文件存储路径
    form.uploadDir = "../../public/upload/images";
    form.keepExtensions = true;
    form.maxFieldsSize = 2 * 1024 * 1024;
    form.parse(req, function(err, fields, files) {
        console.log(files);
        // console.log(files.thumbnail.path);
        // console.log('文件名:'+files.thumbnail.name);
        var t = (new Date()).getTime();
        //生成随机数
        var ran = parseInt(Math.random() * 8999 +10000);
        //拿到扩展名
        var extname = path.extname(files.thumbnail.name);

        //path.normalize('./path//files/data/../file/./123.jpg'); 规范格式文件名
        var oldpath =   path.normalize(files.thumbnail.path);

        //新的路径
        var newfilename=t+ran+extname;
        var newpath =  './public/images/'+newfilename;
        console.warn('oldpath:'+oldpath+' newpath:'+newpath);
        fs.rename(oldpath,newpath,function(err){
            if(err){
                console.error("改名失败"+err);
            }
            res.json('index', { title: '图片上传陈宫:', imginfo: newfilename });
        });


        //res.end(util.inspect({fields: fields, files: files}));
    });
})
module.exports = router;