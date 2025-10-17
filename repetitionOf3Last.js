/*
Given a word and a number (N), write a program to print the last
three (3) characters of the word N time in a single line.

Input:
Transport
2
Output:
ortort

My result:
*/

function nRepetition(string, num) {
  let rvsStr = string.split("").reverse().join(""), res = '';
  rvsStr = (rvsStr[0] + rvsStr[1] + rvsStr[2]), rvsStr = rvsStr.split("").reverse().join("");
  for (i = 0; i < num; i++) {
    res += rvsStr;
  };
  console.log(res);
};

nRepetition('Transport', 2), nRepetition('Python', 4);