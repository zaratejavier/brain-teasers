






// 0.√
// Write a function called dividez that takes two numbers and returns the result of division 
// dividez(4,2) => 2
// 1.√
// Write a function named reverseString that takes a string and reverses it.
// ie reverseString('yoyo') => 'oyoy'
// 2.
// Write a function named arrayToString that takes an array of strings and returns one string with all values from array combined with '-'.
// ie arrayToString(['yo','my','yoyo']) => 'yo-my-yoyo'
// 3.
// Write a function named sumArray that takes an array of numbers and returns the sum.
// ie sumArray([1,2,3]) => 6
// 4.
// Write a function named removeItemFromArray that takes an array of anytype and a index and removes the item of a given index and returns new array. This one is up to you to think about how to handle invalid input.  discuss this with your partner first
// ie removeItemFromArray([1,'2' ,'hello'], 2) => [1, '2']

//--------------------------------------------------------------
// Write a function called dividez that takes two numbers and returns the result of division 
// dividez(4,2) => 2
//--------------------------------------------------------------

//0
// function dividez(num1, num2){
//   return num1 / num2;
// }


// function test(){
//   let result = dividez(4,2);
//   if (result !== 2){
//     console.log("dividez failed")
//     return;
//   }
//   console.log("Successful")
  
// }

// test()
//--------------------------------------------------------------
// Write a function named reverseString that takes a string and reverses it.
// ie reverseString('yoyo') => 'oyoy'
//--------------------------------------------------------------
//1
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }


// function test(){
//   let result = reverseString("yoyo");
//   if (result !== "oyoy"){
//     console.log("reverse failed")
//     return;
//   }
//   console.log("Successful")
//   console.log(result)

  
// }

// test()

//--------------------------------------------------------------
// Write a function named arrayToString that takes an array of strings and returns one string with all values from array combined with '-'.
// ie arrayToString(['yo','my','yoyo']) => 'yo-my-yoyo'
//--------------------------------------------------------------

//2

// function arrayToString(str) {
//     return str.join("-");
// }


// function test(){
//   let result = arrayToString(["yo", "my", "yoyo"]);
//   if (result !== "yo-my-yoyo"){
//     console.log("reverse failed")
//     return;
//   }
//   console.log("Successful")
//   console.log(result)
  
// }

// test()

//--------------------------------------------------------------
// Write a function named sumArray that takes an array of numbers and returns the sum.
// ie sumArray([1,2,3]) => 6
//--------------------------------------------------------------

// //3
// function sumArray(num){
//   var sum = 0; 

//   for (var i = 0; i < num.length; i++){
//   sum += num[i]
//   }
//   return sum;
// }


// function test(){
//   let result = sumArray([1, 2, 3]);
//   if (result !== 6){
//     console.log("sum failed")
//   console.log(result)

//     return;
//   }
//   console.log("Successful")
//   console.log(result)
  
// }

// test()



//--------------------------------------------------------------
// Write a function named removeItemFromArray that takes an array of anytype and a index and 
// removes the item of a given index and returns new array. This one is up to you to think about how to handle invalid input.  
// discuss this with your partner first
// ie removeItemFromArray([1,'2' ,'hello'], 2) => [1, '2']
//--------------------------------------------------------------
// function removeItemFromArray(array,index) {
  
//   return arr.splice(array,index)
// }
// function test() {
//   let result = removeItemFromArray([1, 2, 3],2);
//   arr = [1, '2', 'hello']
//   let theSplice = removeItemFromArray(arr, 2, 1)
//   console.log('splice =>', theSplice)
//   console.log('array =>', arr)
//   if (JSON.stringify(arr) !== JSON.stringify([1, '2'])) {
//     console.log('nope')
//     return
//   }
//   console.log('pass')
// }
// test()






// function removeItemFromArray(array, start, deleteCount) {
//   let arrDeletedItems = array.splice(start, deleteCount)
//   return arrDeletedItems
// }
// function test() {
//   arr = [1, '2', 'hello']
//   let theSplice = removeItemFromArray(arr, 2, 1)
//   console.log('splice =>', theSplice)
//   console.log('array =>', arr)
//   if (JSON.stringify(arr) !== JSON.stringify([1, '2'])) {
//     console.log('nope')
//     return
//   }
//   console.log('pass')
// }
// test()

// -------------------------------------------------------------
// 5.
// Write a function numToWord that takes a single number and returns the number as the word (only needs to work for 0-9)
// numToWord(0) => 'zero'
// ------------------------------------------------------------------

// function numtoWord(num){
// var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

// if (num <= 9) {
//   return numbers[num];
// }                             
// }

// function test(){
//   let result = numtoWord(0);
//   if (result !== "zero"){
//     console.log("failed")
//     return;
//   }
//   console.log("Successful")
// }
// test()

//------------------------------------------------------------------------------
// 6.
// write a function wordCount that takes a string a returns the number of words
// wordCount('there are four in') => 4
// ----------------------------------------------------------------------------


// function wordCount (str){
//   return str.split(" ").length;
// }


// function test(){
//   let result = wordCount("there are four in");
//   console.log(result)
//   if (result !== 4){
//     console.log("failed")
//     return;
//   }
//   console.log("Successful")
// }

// test()

// ---------------------------------------------------------------
// 7.
// write a function fullName that takes in a object with first_name and last_name and returns the full name as string
// fullName({first_name:'karate',last_name:'kid'}) => 'karate kid'
// ---------------------------------------------------------------------

// function fullName(person){
//   return `${person.first_name} ${person.last_name}`
// }


// function test(){
//   let result = fullName({first_name:'karate',last_name:'kid'});
//   console.log(result)
//   if (result !== "karate kid"){
//     console.log("failed")
//     return;
//   }
//   console.log("Successful")
// }

// test()

// ---------------------------------------------------------------------
// 8.
// write a function fullNameArray that takes an array of objects from 7 and returns a new array of full_name
// fullNameArray(
// [{first_name:'karate',last_name:'kid'},
// {first_name:'jim',last_name:'bob'}]
//) => ['karate kid', 'jim bob']
// -------------------------------------------------------------------------

function fullNameArray(arr) {
  let newArr = arr.map( a => `${a.firstName} ${a.lastName}`);
  return newArr;
};
function test8() {
let theName = fullNameArray([
  {firstName: "Daniel", lastName: "Russo"},
  {firstName: "Mr.", lastName: "Miagi"}
]);
  if (JSON.stringify(theName) === JSON.stringify(["Daniel Russo", "Mr. Miagi"])) {
    console.log(theName)
    console.log("Good job!")
    return;
  }
  console.log(theName)
  console.log("You failed")
};
test8();