"use strict";

/*


INTRODUCTION TO ARRAYS


*/

const friend1 = "Fred";
const friend2 = "Wilma";
const friend3 = "Barney";

const friends = ["Fred", "Wilma", "Barney"];
console.log(friends);

const year = new Array(1991, 1984, 2008, 2020);
console.log(year);

console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Betty";
console.log(friends);

// friends = ["Mork", "Mindy"]; //* This will not work because friends is a const

const firstName = "Fred";
const flintstones = [firstName, "Flintstone", 2020 - 1984, "cartoon", friends];
console.log(flintstones);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

calcAge(years); // This will not work because calcAge is expecting a number, not an array
console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  [calcAge(years[0]), calcAge(years.length - 1)],
];
console.log(ages);
