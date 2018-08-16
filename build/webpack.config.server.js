const path = require('path')

module.exports = {
	target: 'node',
	entry: {
		app: path.join(__dirname, '../client/server-entry.js')
	},
	output: {
		filename: 'server-entry.js', //js文件改变，hash值改变，最大限度使用缓存
		path: path.join(__dirname, '../dist'),
		publicPath: '/public', //区分是静态资源还是api等
		libraryTarget: 'commonjs2'
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
	}

}