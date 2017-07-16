var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //configure mongoose to use standard Promise library
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
