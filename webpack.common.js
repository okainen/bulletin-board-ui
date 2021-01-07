const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.join(__dirname, 'src');
const distPath = path.join(__dirname, '.dist');
module.exports.distPath = distPath;

const isDev = process.env.NODE_ENV == 'development';

module.exports.commonConf = {
  entry: {
    test: [path.join(srcPath, '/index.js')]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV', 'AUTH_HOST', 'POSTS_HOST'])
  ],
  output: {
    filename: 'bundle.js',
    path: distPath
  },
  context: srcPath,
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.worker\.js$/,
        use: {loader: 'worker-loader'}
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }
    ]
  }
};
