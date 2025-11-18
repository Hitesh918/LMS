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
    password: {
        type: String,
        required: [true, 'Password cannot be empty']
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;