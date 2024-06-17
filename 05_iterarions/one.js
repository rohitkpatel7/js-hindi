//for

for (let index = 0; index < 10; index++) {
  const element = index;
  if (element == 5) {
    // console.log(("5 is best number"));
  }
  // console.log(element);
}

for (let i = 1; i <= 5; i++) {
//  console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 5; j++) {
    // console.log(`inner loop value: ${j} and outer loop value ${i}`);
   // console.log(i + "*" + j + "=" + i * j);
  }
}

let myArray=["flash","batman","superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
  //  console.log(element);
    
}


//break and continue

// for (let index = 0; index < 10; index++) {
//     if(index==5){
//      console.log(`5 Detected`);
//       break;  
//  }
//  console.log(`value of i is ${index}`);
// }


for (let index = 0; index < 10; index++) {
    if(index==5){
     console.log(`5 Detected`);
      continue;  
 }
 console.log(`value of i is ${index}`);
}





