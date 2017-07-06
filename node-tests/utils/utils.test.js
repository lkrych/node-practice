const expect = require('expect');
const utils = require('./utils');

it('Should add two numbers.', () => {
  var res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number');
});

//done argument tells mocha that the test is aync
it('Should add two numbers asynchronously.', (done) => {
  var res = utils.asyncAdd(4,3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done(); // exits mocha
  });
});

it('Should square a number.', () => {
  var res = utils.square(9);
  expect(res).toBe(81).toBeA('number');
});

it('Should square a number asynchronously.', (done) => {
  var res = utils.asyncSquare(4, (square) => {
    expect(square).toBe(16).toBeA('number');
    done(); // exits mocha
  });
});

it('should expect some values', () => {
  // expect({name: 'Fideo'}).toBe({name: 'Fideo'}); This will fail
  // They are not the exact same object. They have the same properties
  expect({name: 'Fideo'}).toEqual({name: 'Fideo'});
});

it('Should set the first and last name of a user', () => {
  var user = {firstName: 'Bill',
              lastName: 'Toll'};
  expect(user.firstName).toBe('Bill');
  expect(user.lastName).toBe('Toll');
  utils.setName(user, "George Pataki");
  expect(user.firstName).toBe('George');
  expect(user.lastName).toBe('Pataki');
});
