const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const host = process.env.HOST || 'localhost';
const appDirectory = fs.realpathSync(process.cwd());

const resolveAppPath = (relativePath) =>
  path.resolve(appDirectory, relativePath);

process.env.NODE_ENV = 'development';

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {presets: ['@babel/preset-env']},
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: [{loader: 'file-loader'}],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {localIdentName: '[local]___[hash:base64:5]'},
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
    ],
  },
  resolve: {extensions: ['*', '.js', '.jsx']},
  output: {
    path: resolveAppPath('dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: resolveAppPath('dist'),
    compress: true,
    hot: true,
    host,
    port: 3000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
