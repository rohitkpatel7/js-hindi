function sayMyName() {
  console.log("R");
  console.log("O");
  console.log("H");
  console.log("I");
  console.log("T");
}

//sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(3,4.9)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

function addTwoNumbers(number1, number2) {
  // let result=number1+number2
  // return result

  return number1 + number2;
}

const result = addTwoNumbers(3, 5);
//console.log("Result:", result);

function loginUserMessage(username = "Default-name") {
  //if(!username){ } and if(username===undefined){}
  //both are equivalent
  if (!username) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}

//console.log(loginUserMessage("rohit"));
console.log(loginUserMessage());
