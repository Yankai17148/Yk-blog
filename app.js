'use strict'

var app = require('./server/index');

var port = process.env.PORT || 3030;

app.listen(port, function() {
	console.log('server listened on ' + port + ' port');
})