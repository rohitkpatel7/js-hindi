
const myArr=[0,1,2,3,4,5]
const myHero=["Shaktiman", "naagraj"]
const myArr2=new Array(1,2,3,4)


// console.log(myArr2[1]);
// console.log(myHero[1]);

//Array methods

//myArr.push(6)
//myArr.push(7)
//console.log(myArr)

//myArr.pop()
//console.log(myArr);


//don't use it . it will shift all array value that's why computer has more load
// myArr.unshift(7)
//myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


//const newArr=myArr.join()  //convert all element of array to string

// console.log(myArr);
// console.log(newArr); 

//slice , splice

console.log("A",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);

//NOTE: jab arr.slice(i,j) ko use karte hai to ye arr ke print karta hai ith index se (j-1)th index tak jth index not included isse arr me koi change nahi hota 
//but jab arr.splice(i,j) use karte hai to ye arr ke ith index se jth index tak ke elements ko arr se nikal kar alag array bana deta hai isse arr me change ho jata hai



//   node 02_basics/01_array.js