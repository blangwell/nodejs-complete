let name = 'Barent';
console.log(name);

let secondName = name;
console.log(secondName);

// secondName will log 'Barent'
// primitive values are copied by value
// and 'pasted' into the other variable
// when you reassign name, secondName has a different value
// it references the initial, 'pasted' value
name = 'Not Barent';
console.log(secondName);

let person = {
  age: 31,
  name: 'Barent',
  hobbies: ['Coding', 'Video Games', 'Harassing the cat']
};
let thirdPerson = {
  age: 31,
  name: 'Barent',
  hobbies: ['Coding', 'Video Games', 'Harassing the cat']
};

console.log(person);

// var secondPerson = person;
// Object.assign allows you to merge two objects
// gathers the properties of the person object and merges into secondPerson
// create new object copying properties of the old one, not deep clone
// Object.assign({newObject}, oldObject)
let secondPerson = Object.assign({}, person);
console.log(secondPerson);

// with slice() we can create a real copy, not just the pointer

let myHobbies = person.hobbies.slice();

// secondPerson.name will log 'Not Barent'
person.name = 'Not Barent'; 
person.hobbies.push('Bein cool');
console.log(secondPerson);

console.log(thirdPerson);

// let myHobbies = person.hobbies;
console.log(myHobbies);

