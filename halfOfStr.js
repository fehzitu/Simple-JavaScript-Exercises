/*
Write a program that reads a string and prints
the firtst half part of the string.

Input:
Amazon
Output:
Ama

My result:
*/

function half(string) {
  let res = '';
  for (i = 0; i < string.length / 2; i++) {
    res += string[i];
  };
  console.log(res);
};

half('Amazon'), half('Bottle');