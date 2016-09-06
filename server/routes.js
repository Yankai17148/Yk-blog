'use strict'

module.exports = function(app) {
	app.use('/api/article', require('./apis/article'));
	app.use('/api/user', require('./apis/user'));
}