var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel' }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
