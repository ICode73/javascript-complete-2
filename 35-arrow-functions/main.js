"use strict";

/*


* ARROW FUNCTIONS


*/

// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 67 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(1991, "Fred"));
console.log(yearsUntilRetirement(1980, "Wilma"));
