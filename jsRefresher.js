// // OLD SYNTAX
// var name = 'Barent';
// var age = 31;
// var hasHobbies = true;

// function viewUser(userName, userAge, userHobbies) {
//   return (
//     'Name is ' + userName +
//     ', age is ' + userAge + 
//     ' and the user has hobbies: ' +
//     userHobbies
//   );
// }
// console.log(viewUser(name, age, hasHobbies))

// NEW SYNTAX
// const name = 'Barent';
// let age = 31;
// const hasHobbies = true;

// age = 32;

// const viewUser = (userName, userAge, userHobbies) => {
//   return (
//     'Name is ' + userName + ', age is ' + userAge + 
//     ' and the user has hobbies: ' + userHobbies
//   );
// }
// console.log(viewUser(name, age, hasHobbies))

// implicit return
// const add = (a,b) => a + b;
// no parenthesis for single arg
// const addOne = a => a + 1;
// empty parenthesis for no arg
// const addRandom = () => 1 + 2;

// OBJECTS WITH FUNCTION PROPERTIES
// const person = {
//   name: 'Barent',
//   age: 31,
//   greet() { // no function keyword needed
//     console.log('Hi, I am ' + this.name);
//   }
// };

// const hobbies = ['Coding', 'Harassing the Cat'];

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// we can push to the constant because the variable in stack
// only holds a pointer to the heap address of the array
// hobbies.push('Vaping');
// console.log(hobbies);

// create a new array with all the old values + changes
// const copiedArray = hobbies.slice();
// SPREAD 
// const copiedArray = [...hobbies];
// console.log(copiedArray)

// spread also works on regular objects
// const copiedPerson = {...person};
// console.log(copiedPerson);

// const toArray = (arg1, arg2, arg3) => {
//   return [arg1, arg2, arg3];
// }
// REST (looks just like spread)
// it is defined by where it is used
// when ... is used in function it is rest
// const toArray = (...args) => {
//   return args;
// }
// console.log(toArray(1, 2, 3, 4))

// DESTRUCTURING
// const person = {
//   name: 'Barent',
//   age: 31,
//   greet() { // no function keyword needed
//     console.log('Hi, I am ' + this.name);
//   }
// };

// // const printName = (personData) => {
// //   console.log(personData.name);
// // }
// // VS: destructured approach
// // this is clearer about what we expect from the arg object
// const printName = ({ name }) => {
//   console.log(name);
// }

// printName(person);

// const { name, age } = person;
// console.log(name, age);

// // array destructuring, choose any names you want for vlaues
// // items are pulled out by position
// const hobbies = ['Coding', 'Harassing the Cat'];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// ASYNCHRONOUS CODE

const fetchData = () => {
  // manual creation of Promise instance
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
  return promise;
}

// () => callback
// callback should 'call back' later
setTimeout(() => {
  console.log('Timer is done!');
  fetchData().then(text => {
    console.log(text)
    return fetchData();
  })
  // don't nest promises
  .then(text2 => {
    console.log(text2);
  });
}, 2000);

console.log('hello');
console.log('hi there');