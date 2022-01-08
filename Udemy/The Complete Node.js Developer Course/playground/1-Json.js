const fs = require("fs");

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// const bookJson = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJson);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);
// console.log(data);

const myInfo = {
  name: "mohamed",
  planet: "Earth",
  age: 25,
};

fs.writeFileSync("1-json.json", JSON.stringify(myInfo));

const dataBuffer = fs.readFileSync("1-json.json");
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
console.log(data);
