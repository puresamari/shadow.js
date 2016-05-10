var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'shadow.min.js',
        libraryTarget: 'var',
        library: 'ShadowManager'
    },
    module: {
        loaders: [
            {
                test: /\.js$/ ,
                exclude: /(node_modules|bower_components)/ ,
                loaders: [ 'babel-loader' ]
            }
        ]
    },
    extensions: [ '' , '.js' ],
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};