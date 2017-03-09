'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/frontend',
  entry: {
    main: './main'
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: '[name].js'
  },

module: {
  rules: [
    {
      test: /\.js$/,
      include: __dirname + '/frontend',
      use: ["babel-loader?presets[]=es2015"]
    },

{
  test: /\.styl$/,
  use: ['style-loader', 'css-loader','stylus-loader?resolve url']
},

{
  test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
  use: 'file-loader?name=[name].[ext]?[hash]'
}

  ]
},

devServer: {
  host: 'localhost',
  port: 8080,
  contentBase: __dirname + '/backend'
}


};
