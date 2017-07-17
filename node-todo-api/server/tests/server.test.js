const expect = require('expect');
const request = require('supertest');

const { app } = require('../server');
const { Todo } = require('../models/todo');

beforeEach((done) => {
  Todo.remove({}).then(() => done()); //wipes all todos
});

describe('POST /todos', () => {
  //you need done to do an async test
  it('should create a new todo', (done) => {
    var text = 'Test todo test';

    request(app) //supertest library
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res) => {
      expect(res.body.text).toBe(text); //expect response to have text in body
    })
    .end((err, res) => {
      if(err){
        return done(err); //if err exists, wraps up test
      }

      Todo.find().then((todos) => {
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e) => done(e));
    });
  });
});
