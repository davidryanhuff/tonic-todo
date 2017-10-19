const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const autoprefixer = require('autoprefixer')

const baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.[hash].js',
    publicPath: '/',
  },
  devtool: 'eval-source-map',

  devServer: {
    inline: true,
    contentBase: './',
    port: '8080',
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss$)/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                autoprefixer,
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

