var express = require('express');
var router = express.Router();
const Config = require('../../config');
var knex = require('knex')(Config.mysql);


/**
 * 获取书籍列表
 */
router.get('/', function (req, res, next) {
    knex.select('id', 'book_name', 'book_author', 'book_price', 'book_logo', 'book_desc').from('books').then(function (rs) {
        res.json({books: rs});

    }).catch(function (err) {
        console.log(err);
    })
});
/**
 * 增添书籍
 */
router.post('/add/book', function (req, res, next) {
    var reqData = req.body;
    knex('books').insert(
        {
            'book_name': reqData.bookName,
            'book_author': reqData.author,
            'book_price': reqData.price,
            'book_desc': reqData.desc,
            'book_logo': reqData.bookLogo
        }).then(function (rs) {
        console.log(res);
        res.json({msg: '添加成功'});
    }).catch(function (err) {
        console.log(err);
    });
});

/**
 *修改书籍信息
 */
router.put('/update/book:id', function (req, res, next) {
    console.log(req.body);
    knex('books').update('book_price', req.body.book_price).where('id', req.body.id).then(function (rs) {
        console.log(rs);
        res.json({msg: '修改价格成功'});
    }).catch(function (err) {
        console.log(err);
        res.json({msg: '修改价格失败'});
    })
});

router.delete('/delete/book:id', function (req, res, next) {
    console.log(req.body);
    knex("books").where('id', req.body.id).del().then(function (rs) {
        console.log("rs");
        console.log(rs);
        res.json({msg: '删除成功'});

    }).catch(function (err) {
        res.json({msg: '删除失败'});
    })
})


// router.get('/get/books',function(req,res,next){
//     knex.select('book_id', 'book_author', 'book_price','book_logo','book_desc').from('books').then(function(res){
//         console.log(res);
//
//     }).catch(function (err) {
//         console.log(err);
//     })
// });

module.exports = router;