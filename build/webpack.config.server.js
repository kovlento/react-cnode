const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')  //官方提供合并webpack配置
const baseConfig = require('./webpack.base')


module.exports = webpackMerge(baseConfig,{
	target: 'node',
	entry: {
		app: path.join(__dirname, '../client/server-entry.js')
	},
	// 指定某些包不输出到最终输出的js中
	externals: Object.keys(require('../package.json').dependencies),
	output: {
		filename: 'server-entry.js', //js文件改变，hash值改变，最大限度使用缓存
		// path: path.join(__dirname, '../dist'),
		// publicPath: '/public', //区分是静态资源还是api等
		libraryTarget: 'commonjs2'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.API_BASE': '"http://127.0.0.1:3000"'
		})
	]
	// module: {
	// 	rules: [{
	// 		enforce: "pre",
	// 		test: /.(js|jsx)$/,
	// 		loader: 'eslint-loader',
	// 		exclude: [
	// 			path.resolve(__dirname, '../node_modules')
	// 		]
	// 	}, {
	// 		test: /.jsx$/,
	// 		loader: 'babel-loader'
	// 	}, {
	// 		test: /.js$/,
	// 		loader: 'babel-loader',
	// 		exclude: [
	// 			path.join(__dirname, '../node_modules')
	// 		]
	// 	}]
	// }

})
