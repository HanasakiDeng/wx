let app = require('../app');
let debug = require('debug')('server:server');
let https= require('https');
let fs =require('fs');
let path = require('path');

const options ={
    key:fs.readFileSync(path.join(__dirname,'../ssl/214319468110175.key'),'utf-8'),
    cert:fs.readFileSync(path.join(__dirname,'../ssl/214319468110175.pem'),'utf-8')
}
let httpsServer = https.createServer(options,app);

const SSL_PORT = 3000;

//创建https服务器
httpsServer.listen(SSL_PORT,function(){
    console.log('https服务器启动了');
});
