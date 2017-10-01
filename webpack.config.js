'use strict';
var webpack = require('webpack');

var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/dist/app', // `dist` is the destination
    filename: 'bundle.js',
    publicPath: "/app",
  },
  module: {
    rules: [
      {
        test: /\.js$/, //Check for all js files
        loader: 'babel-loader',
        query: {
          presets: [ "babel-preset-env" ].map(require.resolve)
        }
      }
    ]
  },
  resolve: {
    modules: [
      "./src",
      'node_modules'
    ],
    extensions: ['.js']
  },
  //To run development server
  devServer: {
    contentBase: __dirname + '/public',
    open: true,
    watchContentBase: true
  },
  devtool: "source-map" // Default development sourcemap
};

module.exports = config;