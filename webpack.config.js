const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const mode = 'development';

module.exports = {
  mode: mode,
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  entry: {
    bundle: path.join(__dirname, 'client', 'src', 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'client', 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'client', 'src')],
      loader: 'babel-loader',
    }, 
    {
      test: /\.module\.s(a|c)ss$/,
      use: [
        {
          loader: "style-loader"
        }, 
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
            modules: true
          }
        }, 
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
        }
      }]
    },
    {
      test: /.(sa|sc|c)ss$/,
      exclude: /\.module.(s(a|c)ss)$/,
      use: [
        {
          loader: "style-loader"
        }, 
        {
          loader: "css-loader",
        }, 
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
        }
      }]
    }]
  },
  resolve: {
    extensions: ['.jsx', '.js','.scss','.sass']
  },
  optimization: mode === 'development' ? undefined : {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}