const {Ticket} = require('../models');

class FacultyService {
    constructor(facultyRepository , ticketRepository) {
        this.facultyRepository = facultyRepository;
        this.ticketRepository = ticketRepository;
    }
    
    // send reply to ticket
    async sendReplyToTicket(ticketId, messageData) {
        const ticket = await this.ticketRepository.addMessageToTicket(ticketId, messageData);
        return ticket;
    }

    // close a ticket
    async closeTicket(ticketId) {
        const ticket = await this.ticketRepository.closeTicket(ticketId);
        return ticket;
    }

}

module.exports = FacultyService;