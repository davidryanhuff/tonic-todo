const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// import ExtractTextPlugin, { extract } from 'extract-text-webpack-plugin';
const CopyWebpackPlugin = require('copy-webpack-plugin')
// import CopyWebpackPlugin from 'copy-webpack-plugin';
const merge = require('webpack-merge')
// import merge from 'webpack-merge';
const autoprefixer = require('autoprefixer')
// import autoprefixer from 'autoprefixer';

const baseConfig = require('./webpack.base.config.js')
// import baseConfig from './webpack.base.config.babel.js';

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss$)/,
        use: ExtractTextPlugin.extract({
          use: [
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
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].styles.[hash].css'),
    new CopyWebpackPlugin([{ from: 'server.js', to: 'server.js' }])
  ],
});
