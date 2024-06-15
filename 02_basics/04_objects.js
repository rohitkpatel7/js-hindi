//const tinder=new Object()
const tinderUser={}

tinderUser.id="123ssdm"
tinderUser.name="sipra"
tinderUser.isLoggedIn="false"

// console.log(tinderUser)

const regularUser={
  email:"sipro7@gmail.com",
  fullname:{
    userfullname:{
      firstname:"sipra",
      lastname:"kumar",
    }
  }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

//const obj4=Object.assign({},obj1,obj2,obj3)   //not use usually
//console.log(obj4);

const obj5={...obj1,...obj2,...obj3}   //more usefull
//console.log(obj5);

const users = [
{
  id:1,
  email:"sr@gmail.com",

 },
 {
    id:1,
    email:"sr@gmail.com",
  
 },
   {
    id:1,
    email:"sr@gmail.com",
  
   },
]

users[1].email
 
 console.log(tinderUser);
 
  console.log(Object.keys(tinderUser));
 
  console.log(Object.values(tinderUser));
 
  console.log(Object.entries(tinderUser));

 //isLoggedIn property available hai ya nahi
 console.log(tinderUser.hasOwnProperty("isLoggedIn"));
