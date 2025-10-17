/*
Write a program that reads a word and prints the first two and
the last two letters of the word and prints the stars (*) instead
of the remaining letters.

Input:
Message
Output:
Me***ge

My result:
*/

function starRepetition(val) {
  let str = String(val), res = '';
  for (i = 2; i < str.length - 2; i++) {
    res += '*';
  };
  console.log(`${str[0]}${str[1]}${res}${str[str.length -2]}${str[str.length -1]}`);
};

starRepetition('Message'), starRepetition(12345);