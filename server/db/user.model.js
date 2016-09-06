'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	user_name: {type: String, required: true},
	password: {type: String, required: true}

})

var User = mongoose.model('User',UserSchema);

module.exports = User;