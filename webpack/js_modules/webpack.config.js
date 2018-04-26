const path = require('path');
//entry and output {path & filename} are required config properties
const config = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'build'), //must be absolute path, __dirname is a constant in nodeJS, a reference to cwd
    filename: 'bundle.js'
  }
};

module.exports = config;