var socket = io(); //opens connection to server
socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'bonnie@example.com',
    text: 'Hey there, Plamp'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server.');
});

socket.on('newMessage', function(message) {
  console.log('New Message: ', message);
});
