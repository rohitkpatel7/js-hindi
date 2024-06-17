//const coding = ["js", "ruby", "java", "python"];

// const values=coding.forEach( (item) =>{
//     console.log(item);
//     return item
// })
// console.log(values);
//it do not return

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);

// const newNums = myNums.filter((num) => {
//   return num > 4;
//   //in this we use {} bracket so we start scope . so the return keyword is mandatory to write
// });
// console.log(newNums);


// const newNums=[]
// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books=[
    { title: 'Book one', genre: 'Fiction',publish: 1982 ,edition: 2005 },
    { title: 'Book two', genre: 'Non-Fiction',publish: 2001 ,edition: 2004 },
    { title: 'Book three', genre: 'History',publish: 1989 ,edition:  2003},
    { title: 'Book four', genre: 'Non-Fiction',publish: 1991,edition: 2001 },
    { title: 'Book five', genre: 'Science',publish: 1993 ,edition: 2000 },
    { title: 'Book six', genre: 'Fiction',publish: 1998 ,edition:  2006},
    { title: 'Book seven', genre: 'History',publish: 1994 ,edition:2005  },
    { title: 'Book eight', genre: 'Science',publish: 1995 ,edition: 2004 },
];

let userBooks=books.filter( (bk) => bk.genre==='History')

 userBooks=books.filter( (bk) =>{
    return  bk.publish>=1995 && bk.genre==='Fiction'

})

console.log(userBooks);
