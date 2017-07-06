const request = require('supertest'); //used to test express apps
const expect = require('expect');

var app = require('./server').app;

it('should return Hello world! response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({ // use expect library matchers!
        error: 'Page not found.'
      });
    })
    .end(done);
});

it('should return array of user objects', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({ // use expect library matchers!
        name: 'Fideo',
        age: 43
      });
    })
    .end(done);
});
