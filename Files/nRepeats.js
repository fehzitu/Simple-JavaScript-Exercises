/*
You are given a string. Repeat the same string N
times separated by space.

Explanation

In the given example the string is message, N = 3. So we have
to repeat the string three time. Then we get message message message as output.

Input:
Message
3
Output:
Message Message Message

My result:
*/

function nRepetition(string, num) {
  let res = '';
  for (i = 0; i < num; i++) {
    res += `${string} `;
  };
  console.log(res);
};

nRepetition('Message', 3), nRepetition('Pop', 4);