'use strict';


module.exports = {
    entry: [
        './demo/index'
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
    },
};

module.exports.loaders = [
    {
        test: /\.css$/,
        loaders: ['style', 'css'],
    },
    {
        test: /\.md$/,
        loader: 'html!../loaders/markdown',
    },
    {
        test: /\.png$/,
        loader: 'url-loader?limit=100000&mimetype=image/png',
    },
    {
        test: /\.jpg$/,
        loader: 'file-loader',
    },
];
