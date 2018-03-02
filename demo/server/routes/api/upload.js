let express = require('express');
let router = express.Router();
let fs = require('fs');
let path = require("path");
let multiparty = require('multiparty');


router.post('/images', function (req, res, next) {
    let form = new multiparty.Form();
    form.encoding = 'utf-8';
    //设置文件存储路径
    form.uploadDir = path.join((path.resolve(__dirname, '../..')).toString(), 'public/upload/images/');
    form.keepExtensions = true;
    form.maxFieldsSize = 2 * 1024 * 1024;
    form.parse(req, function (err, fields, files) {
        console.log(files); //此处的files解析时为一个数组，且数组对象中的属性名为name key
        console.log(fields);
        if (err) {
            console.log(err);
        } else {
            let t = (new Date()).getTime();
            //生成随机数
            let ran = parseInt(Math.random() * 8999 + 10000);
            //拿到扩展名
            let suffixName = path.extname((files.test)[0].path);

            //path.normalize('./path//files/data/../file/./123.jpg'); 规范格式文件名
            let oldPath = path.normalize((files.test)[0].path);

            //新的路径
            let newFileName = t + ran + suffixName;
            let newPath = form.uploadDir + newFileName;
            console.warn('oldPath:' + oldPath + ' newPath:' + newPath);
            fs.rename(oldPath, newPath, function (err) {
                if (err) {
                    console.error("改名失败" + err);
                }
                res.status(200).json({title: '图片上传成功:', imginfo: newFileName});
            });
        }
        //res.end(util.inspect({fields: fields, files: files}));
    });
});

router.post('/files', function (req, res, next) {
    let form = new multiparty.Form();
    form.encoding = 'utf-8';
    //设置文件存储路径
    form.uploadDir = path.join((path.resolve(__dirname, '../..')).toString(), 'public/upload/files/');
    form.keepExtensions = true;
    form.maxFieldsSize = 2 * 1024 * 1024;
    form.parse(req, function (err, fields, files) {
        console.log(files); //此处的files解析时为一个数组，且数组对象中的属性名为name key
        console.log(fields);
        if (err) {
            console.log(err);
        } else {
            let t = (new Date()).getTime();
            //生成随机数
            let ran = parseInt(Math.random() * 8999 + 10000);
            //拿到扩展名
            let suffixName = path.extname((files.test)[0].path);

            //path.normalize('./path//files/data/../file/./123.jpg'); 规范格式文件名
            let oldPath = path.normalize((files.test)[0].path);

            //新的路径
            let newFileName = t + ran + suffixName;
            let newPath = form.uploadDir + newFileName;
            console.warn('oldPath:' + oldPath + ' newPath:' + newPath);
            fs.rename(oldPath, newPath, function (err) {
                if (err) {
                    console.error("改名失败" + err);
                }
                res.status(200).json({title: '文件上传成功:', fileInfo: newFileName});
            });
        }


        //res.end(util.inspect({fields: fields, files: files}));
    });
});
module.exports = router;