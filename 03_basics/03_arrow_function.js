const user = {
  username: "rohit",
  price: 999,

  welcomeMassage: function () {
    console.log(`${this.username}, welcome to website `);
    console.log(this);
  },
};

// user.welcomeMassage()
// user.username="sam"
// user.welcomeMassage()

//console.log(this);

// function This(){
//     let username="rohit"
//     console.log(this.username);
//    // console.log(this);
// }
// This()

// const func=function(){
//     let username="rohit"
//     console.log(this.username);
// }

//declaration of arrow function
// const func = () => {
//   let username = "rohit";
//   console.log(this);
//   console.log(this.username);
// };

//func();


// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

//impecit return
//const addTwo=(num1,num2)=>  num1+num2

// const addTwo=(num1,num2)=> ( num1+num2 )

/*
jab {} lagayenge to return keyword likhna padega
but jab () lagayenge to return keyword nahi likhna padega
*/

//const addTwo=(num1,num2)=> ({ username: "rohit" })

//console.log(addTwo(3,5));








//   node 03_basics/03_arrow_function.js 