var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //configure mongoose to use standard Promise library
mongoose.connect('mongodb://localhost:27017/TodoApp');

//create simple model for Todo

//trim validator removes leading/trailing whitespace
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// //initialize an instance of the model
// var newTodo = new Todo({
//   text: '   Go climb!    '
// });
//
// //save model instance to db
// newTodo.save().then((doc) => {
//   console.log('Saved todo: ', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

//initialize an instance of the model
var newUser = new User({
  email: 'fideo@noodle.com'
});

//save model instance to db
newUser.save().then((user) => {
  console.log('Saved user: ', JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log('Unable to save user', e);
});
