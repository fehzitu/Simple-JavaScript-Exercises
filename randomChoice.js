/*
Create a function that takes a list of strings as input and returns a random element from the list.

Examples
Input: ["apple", "banana", "cherry"]
Output: "banana" (or any other element from the list)

Input: ["dog", "cat", "mouse"]
Output: "cat" (or any other element from the list)

My result:
*/

function randomChoice(arr) {
  let ran = Math.floor(Math.random() * (Math.floor(arr.length - 1) + 1));
  console.log(arr[ran]);
};

randomChoice(['apple', 'banana', 'cherry']), randomChoice(['dog', 'cat', 'mouse']);