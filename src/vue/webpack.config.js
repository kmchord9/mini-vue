const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/static'),
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', 'vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}