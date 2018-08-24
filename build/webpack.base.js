const path=require('path')

module.exports={
    output:{
      path: path.join(__dirname, '../dist'),
      publicPath: '/public', //区分是静态资源还是api等
    },
    module: {
    rules: [{
      enforce: "pre",
      test: /.(js|jsx)$/,
      loader: 'eslint-loader',
      exclude: [
        path.resolve(__dirname, '../node_modules')
      ]
    }, {
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
}
