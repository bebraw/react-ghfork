'use strict';
var extend = require('xtend');

var common = require('./webpack.common');


module.exports = extend(common, {
    entry: './index',
    externals: {
        react: 'React',
    },
    module: {
        loaders: common.loaders.concat([{
            test: /\.(js|jsx)$/,
            loaders: ['jsx?harmony'],
            exclude: /node_modules/,
        }])
    }
});
