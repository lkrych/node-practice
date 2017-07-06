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
