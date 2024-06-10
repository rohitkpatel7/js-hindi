const score =400
//console.log(score)
const balance=new Number(100)
//console.log(balance)

//console.log(balance.toString().length);

//console.log(balance.toFixed(2)); //give upto 2 precision value

const otherNumber=23.4892
//console.log(otherNumber.toPrecision(4));
const otherNumber2=123.4892
//console.log(otherNumber2.toPrecision(4));

//for see no of Zeroes
const hundreds=1000000
//console.log(hundreds.toLocaleString()); //according to us standard
//console.log(hundreds.toLocaleString('en-IN'));//according to indian standard


/* ++++++++ Maths +++++++++ */

// console.log(Math);
// console.log(Math.abs(-4));  //abs :absolute value
// console.log(Math.round(4.632));  
// console.log(Math.ceil(4.001)); //take upper value ie 5
// console.log(Math.floor(4.9999));   //take lover value ie 4

// console.log(Math.min(2,4,1,6,4));
// console.log(Math.max(2,4,1,6,4));


console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);
//give from 10 to 20







//    node 0_basics/06_nums_and_math.js