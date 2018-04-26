const path = require('path');
//entry and output {path & filename} are required config properties
const config = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'build'), //must be absolute path, __dirname is a constant in nodeJS, a reference to cwd
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']} //loaders are applied from right to left
    ]
  },
  mode: "production"
};

module.exports = config;