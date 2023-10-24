import inquirer from 'inquirer';
import { Student } from './student.js';
import { Course } from './course.js';
import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';

const students: Student[] = [];
const courses: Course[] = [];

const questions = [
  {
    type: 'input',
    name: 'studentName',
    message: "Enter student's name:",
  },
  {
    type: 'input',
    name: 'studentID',
    message: 'Enter student ID:',
  },
  {
    type: 'input',
    name: 'courseName',
    message: 'Enter course name:',
  },
  {
    type: 'number',
    name: 'tuitionFee',
    message: 'Enter course tuition fee:',
  },
  {
    type: 'number',
    name: 'amountPaid',
    message: 'Enter the amount paid:',
  },
];

function createStudent() {
  inquirer.prompt(questions).then((answers) => {
    const student = new Student(answers.studentName, answers.studentID);
    const course = new Course(answers.courseName, answers.tuitionFee);

    student.enrollInCourse(course);
    student.payTuition(answers.amountPaid);

    students.push(student);
    courses.push(course);

    const animation = chalkAnimation.radar(chalk.whiteBright('Processing......'));
    animation.start();

    setTimeout(() => {
      animation.stop();

      const tuitionFee = student.enrolledCourses.reduce((total, course) => total + course.tuitionFee, 0);
      const paidPercentage = (Math.abs(student.viewBalance()) / tuitionFee) * 100;

      if (paidPercentage < 50) {
        console.log(chalk.bgRed('You need to pay at least 50% of the tuition fee for registration.'));
      } else if (paidPercentage >= 50 && paidPercentage < 100) {
        console.log(chalk.bgCyan('Registration is complete. Pay the remaining amount to complete your enrollment.'));
      }
       else {
        console.log(chalk.bgGreen('Registration and enrollment completed.'));
      }
     

      student.showStatus();
    }, 2000);
  });
}

createStudent();
