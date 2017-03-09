'use strict';

let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  target: "node",

  context: __dirname + '/frontend',
  entry:   {
    main: './main',
    styles: './styles'
  },
  output:  {
    path: __dirname + '/public',
    publicPath: './',
    filename: '[name].js'
  },


node: {
  __dirname: false
},

resolve: {
  extensions: ['.js', '.styl']
},

  module: {

  rules: [
        {
          test: /\.styl$/,
          use: ExtractTextPlugin.extract({
            use: ['css-loader','stylus-loader?resolve url']
          })
        },

        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader']
        },

        {
          test: /\.js$/,
          use: ["babel-loader?presets[]=es2015"]
        },

        {
          test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
          use: ["file-loader?name=[path][name].[ext]"]
        }

      ]

  },

plugins: [
  new ExtractTextPlugin({
    filename: 'styles.css',
    allChunks: true
  })
]

};
