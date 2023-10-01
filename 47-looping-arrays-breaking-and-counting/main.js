"use strict";

/*


* LOOPING ARRAYS - BREAKING AND COUNTING


*/

const fredArray = [
  "fred",
  "flintstone",
  2037 - 1950,
  "miner",
  ["barney", "betty", "bambam"],
  true,
];

const types = [];

for (let i = 0; i < fredArray.length; i++) {
  // Reading from fredArray
  console.log(fredArray[i], typeof fredArray[i]);
  // filling types array

  //   types[i] = typeof fredArray[i];

  //   this one is cleaner
  types.push(typeof fredArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// CONTINUE AND BREAK

console.log("---> ONLY STRINGS <---");
for (let i = 0; i < fredArray.length; i++) {
  if (typeof fredArray[i] !== "string") continue;
  console.log(fredArray[i], typeof fredArray[i]);
}

console.log("---> BREAK WITH NUMBER <---");
for (let i = 0; i < fredArray.length; i++) {
  if (typeof fredArray[i] === "number") break;
  console.log(fredArray[i], typeof fredArray[i]);
}
