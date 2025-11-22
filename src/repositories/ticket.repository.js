const {Ticket} = require('../models');

class TicketRepository {

    // create a new ticket
    async createTicket(ticketData) {
        try {
            const ticket = await Ticket.create({
                title : ticketData.title,
                description : ticketData.description,
                raisedBy : ticketData.raisedBy,
                subjectCode : ticketData.subjectCode,
                status : "open",
                
            });
            return ticket;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    // add a message to a ticket
    async addMessageToTicket(ticketId, messageData) {
        try {
            const ticket = await Ticket.findByIdAndUpdate(
                    ticketId,
                    { $push: { messages: messageData } },
                    { new: true }
                );
            return ticket;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    //close a ticket
    async closeTicket(ticketId) {
        try {
            const ticket = await Ticket.findByIdAndUpdate(
                    ticketId,
                    { status: "closed" },
                    { new: true }
                );
            return ticket;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    // get all tickets
    async getAllTickets() {
        try {
            const tickets = await Ticket.find({});
            return tickets;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = TicketRepository;