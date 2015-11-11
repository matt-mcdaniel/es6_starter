var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/main.js'
    ],
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    resolve: {
        root: __dirname + '/src'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            // SASS
            {
              test: /\.scss$/,
              loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
            }
        ]
    },
    stats: {
        colors: true,
        progress: true
    },
    debug: true
};