/**
 * Created by Muc on 17/6/23.
 */
const path = require('path')

module.exports = {
  entry: './src',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  devtool: 'cheap-module-source-map', // 报错时追踪到原文件位置
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}