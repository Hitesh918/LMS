
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

class StudentService {

    constructor(studentRepository , userRepository) {
        this.studentRepository = studentRepository;
        this.userRepository = userRepository;
    }

    //signup service
    async signup(studentData) {
        //validation
        const {name, username, email, password } = studentData;
        if (!name || !username || !email || !password) {
            throw new Error('All fields are required');
        }

        // check if username already exists
        const existingUserByUsername = await this.userRepository.findUserByUsername(studentData.username);
        if (existingUserByUsername) {
            throw new Error('Username already exists');
        }

        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
        studentData.password = hashedPassword;
        // create new student
        const student = await this.studentRepository.createStudent(studentData);

        // create user entry
        await this.userRepository.createUser({
            role: 'student',
            username: studentData.username,
            password: hashedPassword
        });
        return student;
    }

    // async createStudent(studentData) {
    //     const student = await this.studentRepository.createStudent(studentData);

    //     return student;
    // }

    async getAllStudents() {
        const students = await this.studentRepository.getAllStudents();
        return students;
    }

}

module.exports = StudentService;