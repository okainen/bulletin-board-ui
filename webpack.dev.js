const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

const distPath = './dist';
const outputPath = path.join(__dirname, distPath);

module.exports = merge(common, {
  mode: 'development',
  watchOptions: {
    ignored: '/node_modules/',
    aggregateTimeout: 300,
    poll: 1000
  },
  devServer: {
    contentBase: outputPath,
    compress: true,
    port: 3000,
    open: true,
    historyApiFallback: true
  }
});
