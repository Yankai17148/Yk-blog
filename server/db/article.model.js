'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {type: String, required: true},
	content_html: {type: String, required: true},
	content_markdown: {type: String, required: true},
	create_time: {type: Date, default: Date.now, required: true},
	update_time: {type: Date, default:Date.now, required: true},
	index_img: {type: String}

})

var Article = mongoose.model('Article',ArticleSchema);

module.exports = Article;