// 

// const myName = "Hanan";

// console.log(myName)


const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// const isSum50 = (n1 + n2 + n3 + n4);

// console.log(isSum50);

// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// console.log(isTwoOdd);


// // is larger than 25 or (operator) is true beacuse they are not grater than 25
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
// // console.log(isOver25);


// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// console.log(isUnique);

// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// console.log(isValid);


// ============================ Part 1: Math Problems ======



// checking if they are divisiable by 5
const isDivisable = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0;

// the answer is true beacuse they are all divided by 5
// console.log(isDivisable);

// Check if the first number is larger than the last. Cache the result in a variable.

const firstNum = n1 > n4 ;
console.log(firstNum);

const sumNum = n1 - n2 ;
console.log(sumNum)

const sumMulti= sumNum * n3 ;
console.log(sumMulti)

const sumRemainder = sumMulti % n4;
console.log(sumRemainder);


// ========== Part 2: Practical Math =====

// Road trip gas calculation

let miles = 1500;
let fuel = 175;
let perGallon = 3;

//How many gallons of fuel will you need for the entire trip?
console.log(miles / 55); 
console.log(miles / 60); 
console.log(miles / 75); 

// let perGallonCost = milesPerHour * perGallon;
// console.log(perGallonCost); //you will need 75 gallons
// console.log(milesPerHour);

//Will your budget be enough to cover the fuel expense?
const per55 = 55; // best budget
const per60 = 60;
const per75 = 75;

console.log(per55 * 3);
console.log(per60 * 3);
console.log(per75 * 3);

// How long will the trip take, in hours?
let milesPerHour = miles / 60;
console.log(milesPerHour); // 25 hours