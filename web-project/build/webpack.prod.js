'use strict'

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./webpack.base');
const pkg = require('../package');

config.entry.vendor = Object.keys(pkg.dependencies);

config.output.filename = '[name].[chunkhash:8].js'

config.plugins.push(
	new ExtractTextPlugin('styles.[contenthash:8].css'),
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('production')
	}),
	// new webpack.LoaderOptionsPlugin({
	// 	minimize: true
	// }),
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		},
		comments: false
	}),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		filename: 'vendor.[chunkhash:8].js'
	})
)



config.module.loaders.push(
	{
		test: /\.css$/,
		loader: ExtractTextPlugin.extract('style!css')
	},
	{
		test: /\.less$/,
		loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less')
	},
	{
		test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		loader: 'url-loader?limit=8192&name=img/[name].[hash:7].[ext]'
	},
	{
		test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		loader: 'url-loader?limit=2048&name=fonts/[name].[hash:7].[ext]'
	}
)

config.vue = {
	loaders: {
		css: ExtractTextPlugin.extract('css'),
		less: ExtractTextPlugin.extract('css!less')
	}
}

module.exports = config