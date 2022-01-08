const gradeCalc = function (studentScore, totalScore) {
  if (typeof studentScore !== "number" || typeof totalScore !== "number") {
    throw Error("Please provide numbers");
  }

  const percent = (studentScore / totalScore) * 100;
  let grade;
  if (percent >= 90 && percent <= 100) {
    grade = "A";
  } else if (percent >= 80 && percent <= 89) {
    grade = "B";
  } else if (percent >= 70 && percent <= 79) {
    grade = "C";
  } else if (percent >= 60 && percent <= 69) {
    grade = "D";
  } else if (percent >= 0 && percent <= 59) {
    grade = "F";
  } else {
    console.log("Percent out of grade range");
  }

  console.log(`You got a ${grade} (${percent}%)!`);
};

gradeCalc(15, 20);
gradeCalc(10, 20);
gradeCalc(4, 20);
gradeCalc(19, 20);
gradeCalc(17, 20);

try {
  gradeCalc("hi", true);
} catch (e) {
  console.log(e.message);
}
