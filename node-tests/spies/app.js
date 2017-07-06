var db = require('./db');

module.exports.handleSignup = (email, password) => {
  //Check if e-mail aready exists
  db.saveUser({
    email,
    password
  });
  //Send the welcome email
};
