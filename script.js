//esercio1
// function palindroma(str) {
//   str = str.toLowerCase().replace(/\W/g, "");
//  if( str === str.split('').reverse().join('')){
//     return true;
//  }else{
//     return false;
//  }

// }
// console.log( palindroma("In girum imus nocte et consumimur igni"));


//esercizio2
let numbers = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25]
numbers.sort(function(a, b){return b - a})
console.log(numbers);
numbers.sort(function(a, b){return a - b})
console.log(numbers);
