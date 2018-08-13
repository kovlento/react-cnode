const path = require('path')

module.exports = {
	entry: {
		app: path.join(__dirname, '../client/app.js')
	},
	output: {
		filename: '[name].[hash].js', //js文件改变，hash值改变，最大限度使用缓存
		path: path.join(__dirname, '../dist'),
		publicPath: '/public' //区分是静态资源还是api等
	}
}