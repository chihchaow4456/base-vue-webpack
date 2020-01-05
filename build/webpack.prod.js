const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
});