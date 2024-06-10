const name = "Rohit"
const repoCount=50

//not use bcz old way
//console.log(name + repoCount + "number");

//use this 
console.log(` Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`)

const gameName=new String('Rohit-Kumar')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());;
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4);  //can't give negative value bcz don't obey and start with zero
console.log(newString);

const anotherSting=gameName.slice(-8,4);  //can use negative value
console.log(anotherSting);

const newStringOne="    Kumar  ";
console.log(newStringOne);
console.log(newStringOne.trim());

//whenever a java script get space it change it in %20 automatically
const url="https://rohit.com/hohit%20patel"

console.log(url.replace('%20','-'))

console.log(url.includes('namaste'))

console.log(gameName.split('-'))  //split string into different part depending on the "-"


