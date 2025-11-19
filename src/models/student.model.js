const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be empty']
    },
    username: {
        type: String,
        required: [true, 'Username cannot be empty'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email cannot be empty'],
        unique: true
    },
    mobile : {
        type: String,
        required: [true, 'Mobile number cannot be empty'],
        unique: true
    },
    programId: {
        type: String,
        required: [true, 'Program cannot be empty']   
    },
    semester : {
        type: String,
        required: [true, 'Semester cannot be empty']   
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;