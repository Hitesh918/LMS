const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['open', 'closed'],
        default: 'open'
    },
    raisedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',     
    },
    subjectCode: {
        type: String,
    },
    messages: [{
        sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        content: String,
        timeStamp: { type: Date, default: Date.now },
    }]
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;