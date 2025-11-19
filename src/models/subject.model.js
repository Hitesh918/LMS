const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    credits: {
        type: Number,
        required: true
    },
    facultyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    units: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Unit'
    }]
});

module.exports = mongoose.model('Subject', subjectSchema);
