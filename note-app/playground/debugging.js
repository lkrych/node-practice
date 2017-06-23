// practice debugging

//to enter debug: node inspect debugging.js
//to enter debug with chrome node --inspect-brk debugging.js
// go to chrome and type chrome://inspect into searchbar

//handy functions in debug mode = n, c, repl

var person = {
  name: 'Andrew'
};

debugger; // breakpoint!
person.age = 25;

person.name = "Mike";
console.log(person);
