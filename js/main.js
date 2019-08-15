// var firstName = 'Victor';
// var age = 26;

// console.log(firstName.length);
// const firstName = 'Victor';

// Old way
// console.log('My name is ' + firstName + ' and my age is ' + age);

// Better way
// console.log(`My name is ${firstName} and my age is ${age}`);

// alert(`Hello, I am ${firstName}`);

// const birthday = '01/07/1993';
// let fixDate = new Date(birthday);
// console.log(birthday);

// let hello = new String('Hello, there.');
// alert(hello);

let firstName = prompt('What is your first name?');
let lastName = prompt('What is your last name?');

console.log(firstName);
alert(lastName);

let birthday = prompt('What is your birthday? "mm/dd/yyyy"');
let birthdayDate = new Date(birthday);
let correctBirthday = confirm(`Is your birthday ${birthday}`);
if(correctBirthday === true) {
    alert(birthday);
}
else{
    alert('You entered the wrong birthday!');
}



