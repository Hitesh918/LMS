const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
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

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;