const express = require('express');

var app = express();

//serve static files found in public folder
app.use(express.static(__dirname + '/public'));
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

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
