var express = require('express');
var router = express.Router();
const Config = require('../../config');
var knex = require('knex')(Config.mysql);

/**
 * 获取书籍列表
 */
router.get('/',function(req,res,next){
    knex.select('book_id', 'book_author', 'book_price','book_logo','book_desc').from('books').then(function(res){
        console.log(res);

    }).catch(function (err) {
        console.log(err);
    })
});
/**
 * 增添书籍
 */
router.post('/add/book',function (req,res,next) {
    console.log('ese');
   knex('books').insert({});
});

// router.get('/get/books',function(req,res,next){
//     knex.select('book_id', 'book_author', 'book_price','book_logo','book_desc').from('books').then(function(res){
//         console.log(res);
//
//     }).catch(function (err) {
//         console.log(err);
//     })
// });

module.exports = router;