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

    //get all tickets
    async getTickets(facultyId) {
        const faculty = await this.facultyRepository.getFacultyById(facultyId);
        const subjectCodes = faculty.subjectCodes;
        let allTickets = [];
        for (let subjectCode of subjectCodes) {
            const tickets = await this.ticketRepository.getTicketsBySubjectCode(subjectCode);
            allTickets = allTickets.concat(tickets);
        }
        return allTickets;
    }

    // close a ticket
    async closeTicket(ticketId) {
        const ticket = await this.ticketRepository.closeTicket(ticketId);
        return ticket;
    }

}

module.exports = FacultyService;