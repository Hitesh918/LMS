const NotFound = require('../errors/notfound.error');
const Student = require('../models/student.model');

class StudentRepository {

	// create a new student
	async createStudent(studentData) {
		try {
			const student = await Student.create({
				name: studentData.name,
				username: studentData.username,
				email: studentData.email,
				password: studentData.password
			});
			return student;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	// get all students
	async getAllStudents() {
		try {
			const students = await Student.find({});
			return students;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}


}

module.exports = StudentRepository;