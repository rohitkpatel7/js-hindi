//singleton
// object.create  =>constructor methode

//object literals

const mySymbol=Symbol("key1")



const JsUser={
    name: "Rohit",
    "full name": "ROhit Kumar",  //js take object as string 
    [mySymbol]:"myKey1",
    age: 24,
    location: "Varanasi",
    email: "rohit@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
  }

//access
// console.log(JsUser.email); //not a good way
// console.log(JsUser["email"]);  //good methode
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);
//console.log(typeof(JsUser.mySymbol));

JsUser.email="kumar@gmail.com"
//Object.freeze(JsUser)
JsUser.email="patel@gmin.com"  //does not change bcz freeze
//console.log(JsUser);


JsUser.greeting=function(){
    console.log("Hello js user");
}


JsUser.greeting2=function(){
    console.log(`Hello Mr ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());



//   node 02_basics/03_objects.js 
