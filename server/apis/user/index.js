'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.post('/signup', controller.createUser);
router.post('/login', controller.userLogin);
router.get('/logout', controller.logOut);
router.get('/test', controller.testCookie);

module.exports = router;