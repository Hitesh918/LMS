const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    durationYears: {
        type: Number,
        required: true
    },
    years: [{
        sem1: [{
            type: String     // subjectCode
        }],
        sem2: [{
            type: String     // subjectCode
        }]
    }]
});

module.exports = mongoose.model('Program', programSchema);
