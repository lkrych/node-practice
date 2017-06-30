console.log('Starting app');

setTimeout( () => console.log("Inside of callback"), 2000);

// still prints out after  "Finishing up" because the message is sent
// through the event loop, b/c finishing up is still on the call stack
setTimeout( () => console.log("Second callback message"), 0);
console.log('Finishing up');
