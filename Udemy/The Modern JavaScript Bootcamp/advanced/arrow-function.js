const square = (num) => num * num;

const squareLong = (num) => {
  return num * num;
};

console.log(square(5));

const people = [
  {
    name: "mohamed",
    age: 25,
  },
  {
    name: "Ali",
    age: 22,
  },
  {
    name: "ahmed",
    age: 30,
  },
];

// const under30 = people.filter(function (person) {
//   return person.age < 30;
// });

const under30 = people.filter((person) => person.age < 30);

console.log(under30);

const person22 = people.find((person) => person.age === 22);
console.log(person22);
