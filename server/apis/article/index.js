'use strict';

var express = require('express');
var controller = require('./article.controller');

var router = express.Router();

router.post('/addArticle', controller.addArticle);
router.post('/uploadimg', controller.upLoadIndexImg);
router.get('/getArticleList', controller.getArticleList);
router.get('/:id/getArticle', controller.getArticle);
router.put('/:id/updateArticle', controller.updateArticle);
router.delete('/:id', controller.removeArticle);

router.get('/getIndexArticles', controller.getIndexArticles);

module.exports = router;