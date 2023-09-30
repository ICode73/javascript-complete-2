"use strict";

/*


* DOT VS. BRACKET NOTATION


*/

//* Dot notation
const fred = {
  firstName: "Fred",
  lastName: "Flintstone",
  age: 2037 - 1950,
  job: "miner",
  friends: ["Barney", "Wilma", "Betty"],
};
console.log(fred);

console.log(fred.lastName);
console.log(fred["lastName"]);

const nameKey = "Name";
console.log(fred["first" + nameKey]);
console.log(fred["last" + nameKey]);

// console.log(fred. "last" + nameKey); // ERROR

const interestedIn = prompt(
  "What do you want to know about Fred? Choose between firstName, lastName, age, job, and friends"
);
console.log(fred[interestedIn]);

if (fred[interestedIn]) {
  console.log(fred[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
} // Wrong request! Choose between firstName, lastName, age, job, and friends

fred.location = "Bedrock";
fred["twitter"] = "@fredflintstone";
console.log(fred);

// Challenge
// "Fred has 3 friends, and his best friend is called Barney"
console.log(
  `${fred.firstName} has ${fred.friends.length} friends, and his best friend is called ${fred.friends[0]}`
);
