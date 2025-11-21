const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Name cannot be empty']
    },
    documents: {
        type: [String]
    }    
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;