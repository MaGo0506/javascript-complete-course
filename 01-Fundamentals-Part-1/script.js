/*
let js = "amazing";

let firstName = "Luffy";
console.log(firstName);

// Variable name conventions
let luffy_zoro = "LZ";
let $function = 29;

let person = "Nami";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "CyberSecDev";

let job1 = "programmer";
let job2 = "janitor";

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Luffy');

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = null;
console.log(year);
console.log(typeof null);

let age = 45;
age = 33;

const birthYear = 1949;
// birthYear = 2003;

// const job;

var job = "programmer";
job = "teacher";

lastName = "Monkey";
console.log(lastName);
*/

const now = 2030;
const ageMarko = now - 2000;
const ageMagdalina = now - 2002;

console.log(ageMarko, ageMagdalina);
console.log(ageMarko * 2, ageMarko / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3, 3 = 2 * 2 * 2

const firstName = "Luffy";
const lastName = "Monkey";
console.log(lastName + " D. " + firstName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageMarko > ageMagdalina); // >, <, >=, <=
console.log(ageMagdalina >= 18);

const isFullAge = ageMagdalina >= 18;

console.log(now - 1991 > now - 2024);