/*
Take a number and return the sum of first and last digit.

Input:
Input is provided as functional parameter.
Output:
Return the sum.

Eg 1:
10
Output:
1 ( 1 + 0 )

My result:
*/

function sum(num) {
 console.log(Number(String(num)[0]) + Number(String(num)[String(num).length -1]));
};

sum(78);