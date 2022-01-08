let isAccountLocked = false;
let userRole = "Admin";

if (isAccountLocked) {
  console.log("Is account locked");
} else if (userRole === "Admin") {
  console.log("Welcome admin");
} else {
  console.log("Welcome");
}

let temp = 45;

if (temp >= 120) {
  console.log("It's hot outside");
} else if (temp <= 31) {
  console.log("It's cold outside");
} else {
  console.log("Go for it, it is pretty outside");
}
