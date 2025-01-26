// The this keyword in JavaScript refers to the object that is currently executing the code. However, its value can change depending on how the function is called.

const person = {
  name: 'Alice',
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};

// person.greet(); // Output: Hello, my name is Alice

// in the above example person is the Object and the this keyword is refering to person object and it is looking for name.

// javascript constructors

function Person(name) {
  this.name = name;
}

const person1 = new Person('Bob');
// in the above line you are passing name to the the function as a variable and we are assiging that by using this keyword.

// console.log(person1.name); // Output: Bob


// ************************************** //

const person2 = {
  name: 'Alice2'
};

function greet() {
  console.log('Hello, my name is ' + this.name);
}

// greet.call(person2); // Output: Hello, my name is Alice2

const objOld = {
  "a": 1,
  "b": 2,
  "c": function () { return console.log(this.a + this.b) }
}

const obj = {
  "a": 1,
  "b": 2,
  "c": () => console.log(obj["a"] + obj["b"])
}

objOld["c"]();
obj["c"]();
