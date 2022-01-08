class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`;
    });

    return bio;
  }
  set fullName(fullName) {
    const nameList = fullName.split(" ");
    this.firstName = nameList[0];
    this.lastName = nameList[1];
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, likes, grade) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }

  getBio() {
    return this.grade > 70
      ? `${this.firstName} is passing the class`
      : `${this.firstName} is failing the class`;
  }

  updateGrade(amount) {
    this.grade += amount;
  }
}

const student = new Student("Mohamed", "Tanash", 25, ["reading"], 87);
student.fullName = "Ali Ahmed";
console.log(student.getBio());
student.updateGrade(-25);
console.log(student.getBio());
