const mongoose = require('mongoose');

const yearSchema = new mongoose.Schema({
    programId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Program',
        required: true
    },
    yearNumber: {
        type: Number,
        required: true
    },
    semesters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Semester'
    }]
});

module.exports = mongoose.model('Year', yearSchema);
