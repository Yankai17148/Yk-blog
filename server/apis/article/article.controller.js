'use strict'

var mongoose = require('mongoose');
var Article = mongoose.model('Article');
var trimHtml = require('trim-html');
var muilter = require('../../util/multerUtil');

// 添加文章
exports.addArticle = function(req, res, next) {
	var title = req.body.title;
	var contentHtml = req.body.contentHtml;
	var contentMarkdown = req.body.contentMarkdown;
	var indexImg = req.body.indexImg;
	Article.create({
		title: title,
		content_html: contentHtml,
		content_markdown: contentMarkdown,
		index_img: indexImg
	}, function(err, doc) {
		if (err) {
			res.send({success: false, msg: '创建失败 ' + err});
		}else{
			res.send({success: true, msg: '创建成功', data: doc});
		}
	})
}

// 文章首页图片上传
var upload = muilter.single('indexImg');

exports.upLoadIndexImg = function(req, res, next) {
	upload(req, res, function(err) {
		if (err) {
			res.send({success: false, msg: '上传失败 ' + err});
		}else {
			res.send({success: true, msg: '上传成功', data: req.file});
		}
		
	})
}

// 更新文章
exports.updateArticle = function(req, res) {
	var id = req.params.id;
	req.body.updateTime = new Date();
	Article.findByIdAndUpdate(id, {
		title: req.body.title,
		content_html: req.body.contentHtml,
		content_markdown: req.body.contentMarkdown,
		index_img: req.body.indexImg,
		update_time: req.body.updateTime
	}, {new: true}, function(err, article) {
		if (err) {
			res.send({success: false, msg: err});
		}else{
			res.send({success: true, msg: '修改成功', data: article})
		}
	})
}

// 获取文章列表
exports.getArticleList = function(req, res, next) {
	var currentPage = (parseInt(req.query.currentPage) > 0) ? parseInt(req.query.currentPage) : 1;
	var itemsPerPage = (parseInt(req.query.itemsPerPage) > 0) ? parseInt(req.query.itemsPerPage) : 10;
	var startRow = (currentPage - 1) * itemsPerPage;
	var sort = 'create_time';
	sort = '-' + sort;
	Article.find()
		   .select('title content_html create_time update_time index_img')
		   .skip(startRow)
		   .limit(itemsPerPage)
		   .sort(sort)
		   .lean()
		   .exec(function(err, list) {
		   		if (err) {
		   			res.send({success: false, msg: '获取失败' + err});
		   		}else {
		   			function cutAction(list) {
		   				for (var i = 0; i < list.length; i++) {
			   				list[i].cut_html = trimHtml(list[i].content_html, {limit: 100});
			   			}
			   			return list;
		   			}
		   			res.send({success: true, msg: '获取成功', data: cutAction(list)});
		   		}
		   })
}

// 获取单篇文章
exports.getArticle = function(req, res) {
	var id = req.params.id;
	Article.findOne({_id: id}).exec(function(err, article) {
		if (err) {
			res.send({success: false, msg: '获取失败' + err});
		}else {
			res.send({success: true, msg: '获取成功', data: article});
		}
	})
}

//删除文章
exports.removeArticle = function(req, res) {
	var id = req.params.id;
	Article.findByIdAndRemove(id).exec(function(err) {
		if (err) {
			res.send({success: false, msg: '删除失败' + err});
		}else {
			Article.find()
				   .sort('-create_time')
				   .exec(function(err, list) {
						res.send({success: true, msg: '删除成功', data: list});
					})
		}
	})
}

//首页只获取4篇有封面图的最新文章
exports.getIndexArticles = function(req, res) {
	var pageItem = (parseInt(req.query.itemsPerPage) > 0) ? parseInt(req.query.itemsPerPage) : 4;
	Article.find({"$where": "this.index_img !== ''"})
	       .limit(pageItem)
	       .sort('-create_time')
	       .exec(function(err, list) {
		       	if (err) {
		       		res.send({success: false, msg: '获取失败 ' + err});
		       	}else {
		       		res.send({success: true, msg: '获取成功', data: list});
		       	}
	       })
}
