const myFunction = () => {
  const message = "This is my message";
  const printMessage = () => {
    console.log(message);
  };
  return printMessage;
};

const myPrintMessage = myFunction();
myPrintMessage();

const createTipper = (tip) => {
  return (billAmount) => {
    return billAmount * tip;
  };
};

const tip15 = createTipper(0.15);
console.log(tip15(200));
console.log(tip15(400));
console.log(tip15(600));
const tip35 = createTipper(0.35);
console.log(tip35(400));
console.log(tip35(600));
