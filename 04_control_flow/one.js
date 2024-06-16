//if

// const isUserloggedIn=true
// if(isUserloggedIn){
// console.log(`user is logged in`);
// }


// const score=200
// if(score>=200){
//     let power="fly"
//     console.log(`user power: ${power}`);
// }
//console.log(`user power: ${power}`);


const balance=1000
//Don't write like this
// if(balance>500) console.log("test"),console.log("test2");


// if(balance<500){
// console.log("less than");
// }
// else if(balance<750){
// console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900");
// }
// else{
//     console.log("greater than 900");
// }


const isUserloggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(isUserloggedIn && debitCard){
    console.log("Allow to buy cources");
}


if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}