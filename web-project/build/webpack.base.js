'use strict'

const path = require('path');
const webpack = require('webpack');
const vue = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: ['./src/main.js']
	},
	output: {
		path: path.join(__dirname, '../dist'),
		filename: '[name].js',
		publicPath: '/dist/'
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loaders: ['vue']
			},
			{
				test: /\.js$/,
				loaders: ['babel'],
				exclude: [/node_modules/]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Yk的小站 追求卓越的前端开发者',
			template: __dirname + '/index.html',
			filename: '../index.html'
		}),
		new webpack.ProvidePlugin({$: 'jquery'})
	]
}