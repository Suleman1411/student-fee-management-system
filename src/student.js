export class Student {
    name;
    studentID;
    enrolledCourses;
    fee;
    tuitionFee;
    constructor(name, studentID) {
        this.name = name;
        this.studentID = studentID;
        this.enrolledCourses = [];
        this.fee = 0;
        this.tuitionFee = 0;
    }
    enrollInCourse(course) {
        this.enrolledCourses.push(course);
        this.tuitionFee += course.tuitionFee;
    }
    viewBalance() {
        return this.fee;
    }
    payTuition(amount) {
        this.fee = amount;
    }
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log('Enrolled Courses:');
        for (const course of this.enrolledCourses) {
            console.log(`- ${course.courseName}`);
        }
        console.log(`Tuition Fee: RS ${this.tuitionFee}`);
        console.log(`You have paid: RS ${this.fee}`);
        if (this.fee > this.tuitionFee) {
            console.log('Collect your remaining amount');
        }
        else if (this.fee < this.tuitionFee) {
            console.log(`Remaining Amount: RS ${this.tuitionFee - this.fee}`);
        }
        else {
            console.log('No remaining amount. Enrollment is complete.');
        }
    }
}
