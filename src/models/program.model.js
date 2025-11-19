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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Year'
    }]
});

module.exports = mongoose.model('Program', programSchema);
