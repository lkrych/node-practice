var getUser = (id, callback) => {
  var user = {
    id, // id: id
    name: 'Fideo'
  };
  setTimeout(() => {
    callback(user);
  }, 3000); //simulate slow network

};

getUser(42, (user) => {
  console.log(user);
});
