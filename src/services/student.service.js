
class StudentService {

    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }

    async createStudent(studentData) {
        const student = await this.studentRepository.createStudent(studentData);

        return student;
    }

    async getAllStudents() {
        const students = await this.studentRepository.getAllStudents();
        return students;
    }

}

module.exports = StudentService;