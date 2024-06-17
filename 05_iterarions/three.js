//for of

//["","",""]  string in array
//[{},{},{}]  object in array

// const arr =[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings="Hello mister"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

//MAPS

const map = new Map();
map.set("IN", "India");
map.set("uk", "United Kingdom");
map.set("Fr", "France");
//map.set('IN',"India") //will not exicute bcz IN is common
//console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}


const muObj={
    'game1':'NFS',
    'game2':'Spiderman'
}

for (const [kety ,value] of myObj {
    console.log(key,':-',value);
}


