/*
Write a function that takes a list of integers as input. For each number in the list, if the number is even, find its cube. If the number is odd, find its square. Return the sum of all these calculations.

Input:
Input is provided as a Functional Parameter (a list of integers).

Output:
Return the sum of the modified numbers as described.

Example:
Eg 1:
Input: [1, 2, 3]
Output: 18

Explanation:
1 is odd, so 1^2 = 1
2 is even, so 2^3 = 8
3 is odd, so 3^2 = 9
Sum = 1 + 8 + 9 = 18

Eg 2:
Input: [4, 5, 6]
Output: 305

Explanation:
4 is even, so 4^3 = 64
5 is odd, so 5^2 = 25
6 is even, so 6^3 = 216
Sum = 64 + 25 + 216 = 305

My result:
*/

function evenOddSum(arr) {
  let res = 0;
  arr.map(value => {
    value % 2 == 0? res += value ** 3: res += value ** 2;
  });
  console.log(res);
};

evenOddSum([1, 2, 3]), evenOddSum([4, 5, 6]);