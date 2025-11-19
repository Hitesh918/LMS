const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['ppt', 'video', 'material', 'quiz' , 'assignment' , 'project']
    },
    fileUrl: String
});

module.exports = mongoose.model('Content', contentSchema);
