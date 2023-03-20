const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/js/app.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // изображения
      {
        test: /\.(?:ico|gif|svg|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },

      // css
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

      // шрифты
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/inline',
      },
    ],
  },
};
