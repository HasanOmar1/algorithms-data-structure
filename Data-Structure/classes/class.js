class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name: ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies++;
    if (this.tardies >= 3) {
      return `You are explelled!`;
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce((acc, score) => acc + score, 0);
    return sum / this.scores.length;
  }
  static EnrollStudents() {
    // this is used on the class , not on the instance
    return `Enrolling Students`;
  }
}

const student1 = new Student("Hasan", "Omar", 3);
const student2 = new Student("Mama", "Mia", 7);

// console.log(student1.fullName());
// console.log(student1.markLate());
// console.log(student1.markLate());
// console.log(student1.markLate());
// console.log(student1.tardies);
// console.log(student1.addScore(10));
// console.log(student1.addScore(4));
// console.log(student1.scores);
// console.log(student1.calculateAverage());

// static
console.log(Student.EnrollStudents());
