"use strict";

/*


* WHILE LOOP


*/

for (let rep = 1; rep <= 10; rep++) {
  console.log(`FOR: Lifting weights repetition ${rep}`);
}

console.log("====================================");

// while loop
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

console.log("====================================");

// while loop with random number

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }
