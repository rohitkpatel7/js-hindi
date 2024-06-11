
let myDate=new Date()
//console.log(typeof myDate) //object
//console.log(myDate);  //not readable
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());


let myCreatedDate=new Date(2004,11,8)
//console.log(myCreatedDate.toDateString())

//other methode
let myCreatedDate2=new Date(2020,2,7,6,15)
//console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3=new Date("2024-06-10") //yyyy-mm-dd
//console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4=new Date("10-06-2024") //dd-mm-yyyy
//console.log(myCreatedDate4.toLocaleString())


let myTimeStamp=Date.now()

//console.log(myTimeStamp);  //in mili second
//console.log(myCreatedDate.getTime()); //in milisecond
//console.log(Math.floor(Date.now()/1000)); //change into second


let newDate=new Date()
// console.log(newDate.getMonth())
// console.log(newDate.getDay())
// console.log(newDate.getFullYear())

newDate.toLocaleString('default',{
    weekday: "long",
  
})
