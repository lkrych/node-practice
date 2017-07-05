const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
//set express related configurations
app.set('view engine', 'hbs');

//create custom middleware
app.use((request, response, next) => {
  var now = new Date().toString();
  var log =`${now}: ${request.method} ${request.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err){
      console.log('Unable to append to server.log');
    }
  });
  next();
});

//maintenance middleware, stops everything from being executed.
// next isn't called!
// app.use((request, response, next) => {
//   response.render('maintenance.hbs');
// });

//serve static files found in public folder
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (request, response) =>{
  response.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: "Welcome to Fideos Page!"
  });
});

app.get('/about', (request, response) => {
  response.render('about.hbs', {
    pageTitle: 'About Page',
  });
});

app.get('/bad', (request, response) => {
  response.send({
    error: 'Unable to handle this request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
