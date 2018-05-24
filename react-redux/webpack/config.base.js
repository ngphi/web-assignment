const path = require('path')
const webpack = require('webpack')
const settings = {
  rootPath: path.join(__dirname, '../'),
  srcPath: path.join(__dirname, '../client'),
  distPath: path.join(__dirname, '../dist'),
  webpackHotMiddleWare: 'webpack-hot-middleware/client?reload=true',
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 8000
}

module.exports = {
  settings,
  output: {
    path: settings.distPath,
    filename: 'js/[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      /* js files */
      {
        test: /\.js?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true
        },
        include: settings.srcPath,
        exclude: /node_modules/
      },

      /* images */
      { test: /\.(jpg|jpeg|gif|png|ico)$/, loader: 'url-loader?limit=12288&name=assets/images/[name].[ext]' },

      /* fonts */
      {
        test: /\.(woff|woff2|eot|ttf|svg).*$/,
        loader: 'url-loader?name=assets/fonts/[name].[ext]'
      }
    ]
  },
  resolve: {
    root: [path.resolve('./client')]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __LANGUAGES__: JSON.stringify([
        { 'locale': 'en', 'name': 'English' },
        { 'locale': 'fr', 'name': 'French' },
        { 'locale': 'it', 'name': 'Italian' }
      ])
    })
  ]
}
