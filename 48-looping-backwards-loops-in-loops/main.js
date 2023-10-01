"use strict";

/*


* LOOPING BACKWARDS AND LOOPS IN LOOPS


*/
const fredArray = [
  "fred",
  "flintstone",
  2037 - 1950,
  "miner",
  ["barney", "betty", "bambam"],
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = fredArray.length - 1; i >= 0; i--) {
  console.log(i, fredArray[i]);
}

// LOOP INSIDE A LOOP

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise} --------`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
