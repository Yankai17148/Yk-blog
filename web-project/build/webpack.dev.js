'use strict'

const webpack = require('webpack');
const config = require('./webpack.base');

config.plugins.push(
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('development')
	})
)

config.module.loaders.push(
	{
		test: /\.css$/,
		loader: 'style-loader!css-loader'
	},
	{
		test: /\.less$/,
		loader: 'style-loader!css-loader!less-loader'
	},
	{
		test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		loader: 'url?limit=10000'
	},
	{
		test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		loader: 'url?limit=10000'
	}
)

config.devtool = 'eval-source-map'

module.exports = config