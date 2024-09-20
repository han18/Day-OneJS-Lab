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

const trip = 1500;

const mileOne = 55;
const mileTwo = 60;
const mileThree = 75;

const perGallon = 30;
const perGallon2 = 28;
const perGallon3 = 23;

const avgCost = 3;

const budget = 175;

const perMile = mileOne / perGallon;

console.log(perMile);

