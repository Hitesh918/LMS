const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    subjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    unitProgress: [{
        unitId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Unit'
        },
        completed: {
            type: Boolean,
            default: false
        },
        completedAt: Date
    }],
    subjectCompleted: {
        type: Boolean,
        default: false
    },
    subjectCompletedAt: Date
});

module.exports = mongoose.model('Progress', progressSchema);
