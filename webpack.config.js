var path = require('path')
// var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist')

module.exports = {
  // entry: `${SRC_DIR}/index.jsx`,
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  mode: 'production',
  devtool: '#eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: [/\.css$/],
        use: {
          loader: 'style-loader',
        },
      },
      {
        test: [/\.css$/],
        use: {
          loader: 'css-loader',
          query: {
            modules: true,
          },
        },
      },
    ]
  }
}
