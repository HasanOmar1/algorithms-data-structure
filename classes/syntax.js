class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
}

const student1 = new Student("Hasan", "Omar", 3);
const student2 = new Student("Mama", "Mia", 7);

console.log(student1);
console.log(student2);
