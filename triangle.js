/*
Write a program that prints a simple triangle
using the plus ( + ).

Input:
5
Output:
+
++
+++
++++
+++++

My result:
*/

function triangle(num) {
  let pieces = '+';
  for (i = 0; i < num; i++) {
    console.log(pieces);
    pieces += '+';
  };
};

triangle(5);