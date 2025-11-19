const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    contents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content'
    }]
});

module.exports = mongoose.model('Unit', unitSchema);
