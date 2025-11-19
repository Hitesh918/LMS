const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be empty']
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: [true, 'Student ID cannot be empty']
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
    documents: {
        type: [String]
    }    
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;