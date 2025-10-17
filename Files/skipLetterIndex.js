/*
You're given a word and an index position of a character.
You need to write a program that prints the given word without
the character at the given index.

Input:
Combine, 4
Output:
Combne
Input:
Globe, 2
Output:
Glbe

My result:
*/

function skipNum(string, num) {
  let str = String(string), res = '';
  for (i = 0; i < num; i++) {
    res += str[i];
  };
  for (i = num + 1; i < str.length; i++) {
    res += str[i];
  };
  console.log(res);
};

skipNum('Combine', 4), skipNum('Globe', 2);