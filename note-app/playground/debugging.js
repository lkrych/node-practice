// practice debugging

//to enter debug: node inspect debugging.js

//handy functions in debug mode = n, c, repl

var person = {
  name: 'Andrew'
};

debugger; // breakpoint!
person.age = 25;

person.name = "Mike";
console.log(person);
