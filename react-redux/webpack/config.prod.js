const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const baseConfig = require('./config.base')
const settings = merge(baseConfig.settings, {
  host: '0.0.0.0',
  port: 8000
})

module.exports = merge(baseConfig, {
  settings,
  entry: {
    app: [
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
    // Clean build folder
    new CleanPlugin([settings.distPath], {
      root: settings.rootPath
    }),

    // Copy {output}/to/fileName.[ext]
    new CopyWebpackPlugin([{
      from: path.join(settings.srcPath, 'index.html')
    }]),

    // Output extracted CSS to files
    new ExtractTextPlugin('/assets/styles/[name].css'),

    // Uglify js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    // Setting DefinePlugin affects React library size!
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEVELOPMENT__: false,
      __LOGGER__: false,
      // DISABLE redux-devtools
      __DEVTOOLS__: false
    })
  ]
})
