//two types 1.premitive(7 typecall by value) 2. non-premitive
//premitive : String, Number, Boolean, null, undefined, Symbol, BigInt


const score=100
const scoreValue=100.3

const isLoggedIn=null
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)
//const bigNumber=442156611331n


//Reference type (Non premitive) : Array, Objects, Function
// const heros = ["shaktiman","naagraj","doga"]

// //object
//    let myObj={
//     name:"rohit",
//     age: 22,
//     }

//function

// const myFunction=function(){
// console.log("hello world");
// }

//how to know data type
//sabhi none primitive data type ke return datatype ko object bola jata hai
//but function ke return datatype ko object-function bola jata hai
//  console.log(typeof bigNumber);
//  console.log(typeof outsideTemp);
//  console.log(typeof myFunction);

 //reference for interview que of typeof datatype : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof



//******** memory *******/

//Stack (primitive me use hoti hai)
//Heap(Non primitive type me use hoti hai)

let myName="RohitKPatel"
//call by value
let anotherName=myName     
anotherName="PatelRohit"
//console.log(myName)
//console.log(anotherName);

let userOne={
    email: "user@googlr.com",
    upi: "user@boi",
}

//call by reference 
let userTwo=userOne
userTwo.email="rohit@google.com"

console.log(userOne.email)
console.log(userTwo.email);

//note: jitne bhi primitive value hai vo sab stack ke andar jate hai and jab bhi stackme koi chij lenge uska copy hi milta hai but jab heapme koi value lete hai to reference milta hai





