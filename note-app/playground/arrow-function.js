var square = x => x * x;

console.log(square(12));

var user = {
  name: 'Fideo',
  sayHi: () => {
    console.log(arguments); // fat arrow function does not bind arguments object
    console.log(`Hi. I'm ${this.name}`); //undefined b/c this keyword is not bound
  },
  sayHiAlt () {
    console.log(arguments); // logs out arguments object
    console.log(`Hi. I'm ${this.name}`); // this syntax works
  }
};

user.sayHiAlt(1,2,3);
user.sayHi(1,2,3); // returns global arguments object!
