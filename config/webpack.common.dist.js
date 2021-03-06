'use strict';
var extend = require('xtend');

var common = require('./webpack.common');


module.exports = extend(common, {
    entry: './index',
    externals: {
        react: 'react',
    },
    module: {
        loaders: common.loaders.concat([{
            test: /\.(js|jsx)$/,
            loaders: ['babel?stage=1'],
            exclude: /node_modules/,
        }])
    }
});
