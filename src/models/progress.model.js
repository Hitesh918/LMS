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
    units: [{
        unitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit' },
        items: [{
            contentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Content' },
            type: { type: String, enum: ['ppt', 'video', 'material', 'quiz', 'assignment', 'project'] },
            completed: { type: Boolean, default: false },
            completedAt: Date
        }],

        unitCompleted: { type: Boolean, default: false },
    }],

    subjectCompleted: { type: Boolean, default: false },
});

module.exports = mongoose.model('Progress', progressSchema);
