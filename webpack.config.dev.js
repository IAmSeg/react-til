const webpack = require('webpack');

module.exports = {
  entry: './client',
  output: {
    path: 'builds',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test:   /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'style!css!postcss' },
      { test: /\.html$/, loader: 'html' }
    ],
  },
  postcss: function (webpack) {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('postcss-cssnext')(),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ]
  }
};
