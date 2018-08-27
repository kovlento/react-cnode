const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')  //官方提供合并webpack配置
const baseConfig = require('./webpack.base')
const HTMLPlugin = require('html-webpack-plugin')

// 	是否是开发环境
const isDev = process.env.NODE_ENV === 'development'

const config = webpackMerge(baseConfig,{
	entry: {
		app: path.join(__dirname, '../client/app.js')
	},
	output: {
		filename: '[name].[hash].js', //js文件改变，hash值改变，最大限度使用缓存
		// path: path.join(__dirname, '../dist'),
		// publicPath: '/public/' //区分是静态资源还是api等
	},
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
	// },
	plugins: [
		new HTMLPlugin({
			template: path.join(__dirname, '../client/template.html')
		})
	]
})

if (isDev) {
	config.entry = {
		app: [
			'react-hot-loader/patch', //客户端热更新用到
			path.join(__dirname, '../client/app.js')
		]
	}
	config.devServer = {
			host: '0.0.0.0', //指向任何地址
			port: '8888', //端口
			contentBase: path.join(__dirname, '../dist'), // 编译的静态文件地址
			hot: true, // 启动hot module replacement
			overlay: {
				errors: true // 编译过程中的错误显示在页面中
			},
			publicPath: '/public/',
			historyApiFallback: {
				index: '/public/index.html',
			},
      proxy: {
        '/api': 'http://localhost:3333'
      }
		},
		config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
