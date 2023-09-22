"use strict";

/*


* FUNCTIONS
functions can receive and send data
functions are reuseable blocks.

*/

function logger() {
  //function body
  console.log("My name is Fred");
}

// calling, invoking or running the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0)); // not capturing the value in any variable

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
