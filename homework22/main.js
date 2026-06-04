// Задача 1
const firstName = "Artem";
const lastName = "Petrov";
const isStudent = true;

// Задача 2

let age = 21;
let currentYear = 2026;
let birthYear = currentYear - age;

// Задача 3

console.log(
  `I'm ${firstName} ${lastName}, I'm ${age}. I'm a student of the course: ${isStudent} `,
);

// Задача 4

let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;

// 1231245falsetrue я думал, что b и с сложатся 
// 123456789falsetrue
