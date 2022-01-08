// const userAge = 25;
// let message = userAge > 18 ? "You can vote" : "You can not vote";

// console.log(message);

const myAge = 25;

const showPage = () => {
  return "Showing the page";
};

const showErrorPage = () => {
  return "showing the error page";
};

const message = myAge >= 21 ? showPage() : showErrorPage();
console.log(message);

const team = ["Mohamed", "Ahmed"];

const teamSize =
  team.length <= 4
    ? `Team size: ${team.length}`
    : "Too many people in your team";

console.log(teamSize);
