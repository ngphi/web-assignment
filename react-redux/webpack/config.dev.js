const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./config.base')
const settings = merge(baseConfig.settings, {
  host: '0.0.0.0',
  port: 8000
})

module.exports = merge(baseConfig, {
  settings,
  devtool: 'source-map',
    entry: {
    app: [
      settings.webpackHotMiddleWare,
      settings.srcPath
    ]
  },
  module: {
    loaders: [
      {
        test: /\.(scss)$/,
        loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'autoprefixer-loader?{browsers:["last 2 versions", "ie 6-8", "Firefox > 20"]}', 'sass'],
        exclude: settings.srcPath + '/assets'
      },
      {
        test: /\.(scss)$/,
        loader: ExtractTextPlugin.extract('style', 'css',
          'autoprefixer-loader?{browsers:["last 2 versions", "ie 6-8", "Firefox > 20"]}', 'sass'),
        include: settings.srcPath + '/assets'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('/assets/styles/[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEVELOPMENT__: true,
      __LOGGER__: true,
      // DISABLE redux-devtools
      __DEVTOOLS__: true
    })
  ]
})
