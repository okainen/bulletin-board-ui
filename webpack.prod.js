const {merge} = require('webpack-merge');
const {commonConf} = require('./webpack.common.js');

module.exports = merge(commonConf, {
  mode: 'production'
});
