'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.ts',
  output: {
    filename: './assets/script/app.min.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/style/app.min.css',
      publicPath: '/',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        enforce: 'pre',
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'sass-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    stats: 'minimal',
    port: 1011,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
