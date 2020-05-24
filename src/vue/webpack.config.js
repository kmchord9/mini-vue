const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/static')
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js']
  }
}