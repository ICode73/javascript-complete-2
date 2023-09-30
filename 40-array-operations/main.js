"use strict";

/*


* Array Operations


*/
const friends = ["Fred", "Barney", "Wilma"];

// Add to the end of the array
const newLength = friends.push("Pebbles");
console.log(friends);
console.log(newLength);

friends.unshift("Bambam");
console.log(friends);

// Remove from the end of the array
friends.pop(); //last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Barney"));
console.log(friends.indexOf("Wilma"));

friends.push("23");
friends.push(23);

console.log(friends.includes("Barney"));
console.log(friends.includes("Wilma"));
console.log(friends.includes(23));

if (friends.includes("Barney")) {
  console.log("You have a friend called Barney");
} else {
  console.log("You don't have a friend called Barney");
} // You have a friend called Barney

if (friends.includes("Wilma")) {
  console.log("You have a friend called Barney");
} else {
  console.log("You don't have a friend called Wilma");
}
