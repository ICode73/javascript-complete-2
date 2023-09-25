"use strict";

/*


* FUNCTION DECLARATIONS VS. EXPRESSIONS
function is anonymous 

FUNCTIONS ARE ALSO A VALUE

! what is hoisting?

*/

//
// function calcAge1(birthYear) {
// const age = 2037 - birthYear;
// return age;
// }

// FUNCTION DECLARATION
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
