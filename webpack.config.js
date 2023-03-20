const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './index.html'), // шаблон
      filename: 'index.html', // название выходного файла
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      // JavaScript
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

      // шрифты и SVG
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/inline',
        // use: [
        //   {
        //     loader: 'file-loader?name=./fonts/sfpro/[name].[ext]',
        //     loader: 'file-loader?name=./fonts/sfpro-text/[name].[ext]',
        //     loader: 'file-loader?name=./Assets/[name].[ext]',

        //   },
        // ],
      },

      //   {
      //     test: /\.(json)$/,
      //     type: 'asset/resourse',
      //     use: [
      //       {
      //         loader: 'file-loader?name=./fonts/sfpro/[name].[ext]',
      //       },
      //     ],
      //   },
    ],
  },
};
