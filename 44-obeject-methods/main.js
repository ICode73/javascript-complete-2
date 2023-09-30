"use strict";

/*


* OBJECT METHODS


*/

const fred = {
  firstName: "Fred",
  lastName: "Flintstone",
  birthYear: 1970,
  job: "Miner",
  friends: ["Barney", "Wilma", "Betty"],
  hasDriversLicense: true,

  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },

  //   calcAge: function () {
  //     // console.log(this);
  //     return 2037 - this.birthYear;
  //   },
  // };

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

console.log(fred.calcAge());

console.log(fred.age);
console.log(fred.age);
console.log(fred.age);

// console.log(fred["calcAge"](1970));

const getSummary = function (person) {
  return `${person.firstName} is a ${person.calcAge()} - years old ${
    person.job
  }, and he has ${person.hasDriversLicense ? "a" : "no"} driver's license.`;
};
console.log(getSummary(fred));
