const express = require('express');

var app = express();

app.get('/', (request, response) =>{
  response.send({
    name: 'Fideo',
    likes: [
      'noodles',
      'chicken'
    ]
  });
});

app.get('/about', (request, response) => {
  response.send('About page.');
});

app.get('/bad', (request, response) => {
  response.send({
    error: 'Unable to handle this request'
  });
});

app.listen(3000);
