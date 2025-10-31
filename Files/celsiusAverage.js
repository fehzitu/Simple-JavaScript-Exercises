/*
Given a list of temperatures in Fahrenheit, perform the following sequence of operations:
Convert each temperature from Fahrenheit to Celsius.
Calculate the average temperature in Celsius.
Determine the climate condition based on the average temperature:
If the average temperature is below 0°C, return "Freezing".
If the average temperature is between 0°C and 15°C (inclusive), return "Cold".
If the average temperature is between 16°C and 25°C (inclusive), return "Mild".
If the average temperature is above 25°C, return "Hot".
Input:
Input is provided as a Functional Parameter (a list of Fahrenheit temperatures).
Output:
Return the climate condition based on the average temperature.

Example:
Eg 1:
Input: [77, 32, 50]
Output: "Cold"

Explanation:
Temperatures in Celsius: [25, 0, 10]
Average temperature = 11.67°C, which falls in the "Cold" category.
Eg 2:
Input: [89.6, 75.2, 60.8]
Output: "Mild"

Explanation:
Temperatures in Celsius: [32, 24, 16]
Average temperature = 24°C, which falls in the "Mild" category.

My result:
*/

function average(arr) {
  let celsius = 0, average = 0;
  arr.map(value => {
    celsius += (((value - 32) * 5) / 9);
  });
  average = celsius / arr.length;
  if(average < 0) {
    console.log('Freezing');
  } else if(average >= 0 && average <= 15) {
    console.log('Cold');
  } else if(average >= 16 && average <= 25) {
    console.log('Mild');
  } else if(average > 25) {
    console.log('Hot');
  };
};

average([77, 32, 50]), average([89.6, 75.2, 60.8]);
