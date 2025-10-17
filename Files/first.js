/*
Take a number and print out the first digit of the number.

Input:
Input is provided as functional parameter.
123

Output:
Return the output
1

My result:
*/

function first(num) {
  let numStr = String(num);
  numStr[0] == '-'? console.log(numStr[1]): console.log(numStr[0]);
};

first(123), first(-534);