/*
Write a function that generates a random integer between 1 and 10 (inclusive) & and another that generates a random float between 0 (inclusive) and less than 1.

Int Output:
Return the random integer. Ex: (10, 7, 4, 2, 9)

Float Output:
Return the random float. Ex: (0.58, 0.72, 0.44, 0.26, 0.95)

My result:
*/

//Integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
};

getRandomInt(1, 10);

//Float
function getRandom() {
  console.log(Math.random().toFixed(2));
};

getRandom();