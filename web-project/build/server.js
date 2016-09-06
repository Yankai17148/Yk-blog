'use strict'

const path =require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.dev')
const proxy = require('http-proxy-middleware')

const app = express()

config.entry.app.unshift('webpack-hot-middleware/client', 'webpack/hot/dev-server')

config.plugins.push(new webpack.HotModuleReplacementPlugin())

const compiler = webpack(config)

const devMiddleWare = require('webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath,
	stats: {
		colors: true,
		modules: false,
		children: false,
		chunks: false,
		chunkModules: false
	}
})

// proxy middleware options
const apiProxy = proxy('/api', {target: 'http://localhost:3030'})

app.use(devMiddleWare)
app.use(require('webpack-hot-middleware')(compiler))
app.use(apiProxy)

app.get('*', (req, res) => {
	const fs = devMiddleWare.fileSystem
	devMiddleWare.waitUntilValid(() => {
		res.end(fs.readFileSync(path.join(config.output.path, '../index.html')))
	})
})

app.listen(9090, '0.0.0.0', () => {
	console.log('Listening at http://localhost:9090')
})