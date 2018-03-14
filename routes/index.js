var express = require('express');
var router = express.Router();
var http = require('ykt-http-client');

const IP = '127.0.0.1'

///* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});
//
//
////检测用户名是否已存在
//router.post('/checkAcc', function(req, res) {
//	http.post('127.0.0.1:8088/info/find',{acc: req.body.acc}).then((msg) => {
//		if(msg.length == 0){
//			res.send('ok')
//		}else{
//			res.send('')
//		}
//	})
//});
//
////获取翻页数据
//router.get('/getPeopleData', function(req, res) {
//	
//	http.post('127.0.0.1:8088/people/find', { page: Number(req.query.nowpage) , rows: Number(req.query.pagecell) }).then( (msg) => {
//		res.send(msg)
//	})
//	
//});


// ------------------------------------------  网易云 ---------------------------------------------------//
//获取歌单列表
router.get('/getList', function(req, res) {
	
    //submitType:"findJoin",ref:["music",""]
	http.post(IP + ':3000/list/find', {}).then( (msg) => {
		res.send(msg)
	})
	
});


//获取歌单信息
router.get('/getListInfo', function(req, res) {
	
	http.post(IP + ':3000/list/find', {_id: req.query._id,submitType:"findJoin",ref:["music",""]}).then( (msg) => {
		res.send(msg)
	})
	
});



//获取音乐信息
router.get('/getMusic', function(req, res) {
	
	http.post(IP + ':3000/music/find', {_id: req.query._id}).then( (msg) => {
		res.send(msg)
	})
	
});





module.exports = router;
