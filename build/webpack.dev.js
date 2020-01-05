const common = require('./webpack.common.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    bail: true,
    devServer: {
      clientLogLevel: 'warning',
      port: 3000,
      open:true,  
      hot: true,
      noInfo: true,
      proxy: {
        '/api/': {
          target: 'http://localhost:3000',
          secure: false,
          changeOrigin: true
      }}
    // proxt: [{
    //     context: ['/auth', '/api'],
    //     target: 'http://localhost:3000',
    // }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://localhost:3000`],
        },
        onErrors: true,

      })
    ]
})
