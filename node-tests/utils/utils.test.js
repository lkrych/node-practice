const expect = require('expect');
const utils = require('./utils');

it('Should add two numbers.', () => {
  var res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number');
});

it('Should square a number.', () => {
  var res = utils.square(9);
  expect(res).toBe(81).toBeA('number');
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
