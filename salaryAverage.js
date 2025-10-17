/*
Take salary of five employees and print the average salary of all the employees.

Input:
Input is provided as functional parameter.
Output:
Return the average salary.

Eg 1:
10 20 30 40 50
output:
30

Eg 2:
10 22 31 40 50
output :
30.6

My result:
*/

function average(arr) {
  let average = 0;
  arr.map(value => {
    average += value;
  });
  console.log(average / arr.length);
};

average([10, 20, 30, 40, 50]), average([10, 22, 31, 40, 50]);