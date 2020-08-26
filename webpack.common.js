const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const jsPath = './src';
const srcPath = path.join(__dirname, jsPath);
const distPath = './.dist';
const outputPath = path.join(__dirname, distPath);

module.exports = {
    entry: {
        test: [path.join(srcPath, '/index.js')]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Production',
        template: 'index.html',
        filename: 'index.html'
    })],
    output: {
        filename: 'bundle.js',
        path: outputPath
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
                loaders: ['babel-loader']
            },
            {
                test: /\.worker\.js$/,
                use: { loader: 'worker-loader' }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
};
