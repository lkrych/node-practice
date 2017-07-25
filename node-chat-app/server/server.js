const path = require('path'); //built in module
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

//need to configure server to use sockets
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

//serve assets from public folder using static middleware
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'Mikey@plamp.com',
    text: "Hey, What's up?",
    createdAt: 123
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage: ', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected from server.');
  });
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
