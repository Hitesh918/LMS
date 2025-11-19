const mongoose = require('mongoose');

const semesterSchema = new mongoose.Schema({
    programId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Program',
        required: true
    },
    yearId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Year',
        required: true
    },
    semesterNumber: {
        type: Number,
        required: true
    },
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }]
});

module.exports = mongoose.model('Semester', semesterSchema);
