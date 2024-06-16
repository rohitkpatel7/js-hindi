// Immediately Invoked Function Expressions (IIFE)
/*
global scope ke pollution se kai baas problem hoti hai to global scope ke jo bhi pollution haiya declaration hai usko hatane ke liye IIFE ka use karte hai
*/
(function one(){
    // named iife
    console.log(`DB CONNECTED`);

})();
//here semicolon ; must be written bcz in this special case code editter don't correct automatically


( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})("rohit")












