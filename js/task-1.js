// TODO ======= 1 =======
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function countPositivesSumNegatives(input) {
//     let numPositive = 0;
//     let numNegative = 0;
//     const result = [];
//     for (let i = 0; i < input.length; i++) {
//         if (input[i]> numPositive) {
//             numPositive = input[i];
//         }
//         if (input[i] < 0) {
//             numNegative += input[i];

// }
//     }
//     result.push(numPositive);
//     result.push(numNegative);
//     console.log(result);

// }

// countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])

// TODO  ======= 2 =======

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2 ^ 2 + 2 ^ 2=9.
// 1 + 2 ^ 2 + 2 ^ 2=9.
// 3 + 3 ^ 2 + 3 ^ 2=??.

// function foo(array) {
//   return array.reduce((total, item) => {
//     return total + item * item;
//   }, 0);
// }

// console.log(foo([5, 5, 5]));
// console.log(foo([5, 5, 5]));

// TODO  ======= 3 =======

// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).
// ExamplescountBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// const ExamplescountBy = (a, b) => {
//     const result = []
//     for (let i = 1; i <= b; i++) {
//         result.push(a * i)
//     }
//     return result
// }

// console.log(ExamplescountBy(2,5));

// TODO  ======= 4 =======

// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n = 12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5


// Create a function that checks if a number n is divisible by two numbers x AND y.All inputs are positive, non - zero numbers.


// const num = (n, x, y) => {
//     return n % x === 0 && n % y === 0;
// }

// const num = (n, x, y) => {
//     return n % x === 0 && n % y === 0
//         ? `${n} is divisible by ${x} and ${y}`
//         : `${n} is not divisible by ${x} or ${y}`;
//  }

// console.log(num(100, 1, 7));


// TODO  ======= 5 =======


// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// const rockScissorsPaper = (pOne, pTwo) => {
//     pOne = pOne.toLowerCase();
//     pTwo = pTwo.toLowerCase();
//     if (pOne === "scissors" && pTwo === "paper"
//         || pOne === "paper" && pTwo === "rock"
//         || pOne === "rock" && pTwo === "scissors") {
//         return "Player 1 won!";
//     } else if (pOne === pTwo) {
//         return "Draw!";
//     } else {
//         return "Player 2 won!";
//     }
// };

// console.log(rockScissorsPaper("rock", "Rock"));