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
				mobile: studentData.mobile,
				password: studentData.password
			});
			return student;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	//find student by username
	async findStudentByUsername(username) {
		try {
			const student = await Student.findOne({ username: username });
			return student;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	//find student by email
	async findStudentByEmail(email) {
		try {
			const student = await Student.findOne({ email: email });
			return student;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	// find student by id
	async findStudentById(studentId) {
		try {
			const student = await Student.findOne({ _id: studentId });;
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