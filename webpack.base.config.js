const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  context: path.resolve('app'),
  entry: './index.js',
  output: {
    filename: '[name].bundle.[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js$|jsx$)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              ['env', { modules: false }],
              'react',
            ],
          },
        },
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: 'url-loader?limit=100000&name=assets/images/[name].[ext]',
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]',
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.html', '.js', '.json', '.jsx', '.scss', '.css'],
    modules: [path.resolve('node_modules')],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Tonic Todos',
    }),
  ],
};
