/*
Write a function that generates a random even number between 2 and 20 (inclusive).

The output should be one of the even numbers: 2, 4, 6, 8, 10, 12, 14, 16, 18, or 20.

My result:
*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let res = Math.floor(Math.random() * (max - min + 1)) + min;
  if(res % 2 == 0) {
    console.log(res);
  } else {
    getRandomInt(2, 20);
  };
};

getRandomInt(2, 20);