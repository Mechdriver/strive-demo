var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app/src/react');

var config = {
  entry: APP_DIR + '/Landing.jsx',
  output: {
    path: path.resolve(__dirname, 'app/static/lib/'),
    filename: 'bundle.js'
  },
  module: {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        options: {
           presets: ['react', 'env'] // Transpiles JSX and ES6
         }
      },
      {
        test: /\.jpe?g$/,
        loader: "file-loader"
      }
    ]
  }
};

module.exports = config;
