const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

// 	是否是开发环境
const isDev = process.env.NODE_DEV === 'development'

const config = {
	entry: {
		app: path.join(__dirname, '../client/app.js')
	},
	output: {
		filename: '[name].[hash].js', //js文件改变，hash值改变，最大限度使用缓存
		path: path.join(__dirname, '../dist'),
		publicPath: '/public' //区分是静态资源还是api等
	},
	module: {
		rules: [{
			test: /.jsx$/,
			loader: 'babel-loader'
		}, {
			test: /.js$/,
			loader: 'babel-loader',
			exclude: [
				path.join(__dirname, '../node_modules')
			]
		}]
	},
	plugins: [
		new HTMLPlugin({
			template: path.join(__dirname, '../client/template.html')
		})
	]
}

if (isDev) {
	config.devServer = {
		host: '0.0.0.0', //指向任何地址
		port: '8888', //端口
		contentBase: path.join(__dirname, '../dist'), // 编译的静态文件地址
		// hot: true, // 启动hot module replacement
		overlay: {
			errors: true // 编译过程中的错误显示在页面中
		},
		publicPath: '/public/',
		historyApiFallback: {
			index: '/public/index.html',
		}
	}
}

module.exports = config