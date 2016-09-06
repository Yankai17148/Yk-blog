'use strict'

var mongoose = require('mongoose');
var User = mongoose.model('User');
var md5 = require('md5');
var safeWord = 'Yankai17148';

// 注册
exports.createUser = function(req, res, next) {
	var userName = req.body.userName;
	var password = req.body.password;

	User.find({'user_name': userName}).exec(function(err, doc) {
		if (doc != '') {
			res.send({success: false, msg: '用户已存在 ' + err});
		}else {
			User.create({
				user_name: userName,
				password: md5(safeWord + req.body.password)
			}, function(err, result) {
				if (err) {
					res.send({success: false, msg: err, password: req.body.password})
				}else{
					res.send({success: true, msg: '注册成功'})
				}
			})
		}
	})
}

// 登录
exports.userLogin = function(req, res, next) {
	
	var userName = req.body.userName
	User.find({'user_name': userName}).exec(function(err, doc) {
		if (doc == '') {
			res.send({success:false, msg: '用户不存在'});
		}else {
			if (doc[0].password == md5(safeWord + req.body.password)) {
				req.session.isLogin = 1;
				req.session.username = userName;
				// res.cookie('isLogin', '1', { expires: new Date(Date.now() + 10000 * 60 * 60 * 24 * 7), httpOnly: true });
				res.send({success: true, msg: '登录成功'});
				console.log('登录成功' + req.cookies.isLogin + req.session.isLogin + req.session.username);
			}else{
				res.send({success: false, msg: '密码错误'})
				console.log('密码错误');
			}
		}
	})
}

// 登出
exports.logOut = function(req, res) {
	req.session.isLogin = 0;
	req.session.username = null;
	// res.cookie('isLogin','0' , {expires: 0});
	res.send({success: true, msg: '登出成功'});
	console.log('已登出' + req.cookies.isLogin + req.session.isLogin + req.session.username);
}

exports.testCookie = function(req, res) {
	res.cookie('testCookie', 'test', { expires: new Date(Date.now() + 10000 * 60 * 60 * 24 * 7) });
	res.end();
}

//测试 打印用户列表

// exports.userList = function(req, res) {
// 	User.find({}, function(err, doc) {
// 		if (doc == '') {
// 			res.send({msg: '用户列表为空'});
// 		}else {
// 			if (err) {
// 				res.send(err);
// 			}else{
// 				res.json(doc);
// 			}
// 		}
// 	})
// }