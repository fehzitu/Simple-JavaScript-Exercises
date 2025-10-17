/*
Write a program that reads a word and prints the word
excluding the fourth letter of the word

Input:
Equality
Output:
Equlity
Input:
Listen
Output:
Lisen

My result:
*/

function skipFourth(string) {
  let str = String(string), res = '';
  for (i = 0; i < 3; i++) {
    res += str[i];
  };
  for (i = 4; i < str.length; i++) {
    res += str[i];
  };
  console.log(res);
};

skipFourth('Equality'), skipFourth('Listen');