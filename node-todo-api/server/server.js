var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //configure mongoose to use standard Promise library
mongoose.connect('mongodb://localhost:27017/TodoApp');

//create simple model for Todo
var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

//initialize an instance of the model
var newTodo = new Todo({
  text: 'Go to the gym',
  completed: false,
  completedAt: Date.now()
});

//save model instance to db
newTodo.save().then((doc) => {
  console.log('Saved todo: ', doc);
}, (e) => {
  console.log('Unable to save todo');
});
