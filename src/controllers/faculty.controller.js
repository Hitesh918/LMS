const {facultyService} = require('../services');
const { StatusCodes } = require('http-status-codes');
const facultyService = new FacultyService(new FacultyRepository());

async function sendReplyToTicket(req, res, next) {  
    try {
        console.log("incoming req params", req.params);
        console.log("incoming req body", req.body);
        const ticketId = req.params.ticketId;
        const messageData = req.body;
        const ticket = await facultyService.sendReplyToTicket(ticketId, messageData);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully sent a reply to the ticket',
            error: {},
            data: ticket
        })
    } catch(error) {
        next(error);
    }
}

async function closeTicket(req, res, next) {
    try {
        console.log("incoming req params", req.params);
        const ticketId = req.params.ticketId;
        const ticket = await facultyService.closeTicket(ticketId);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully closed the ticket',
            error: {},
            data: ticket
        })
    } catch(error) {
        next(error);
    }
}

//get tickets 
async function getTickets(req, res, next) {
    try {
        console.log("incoming req params", req.params);
        const facultyId = req.params.facultyId;
        const tickets = await facultyService.getTickets(facultyId);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched tickets for the faculty',
            error: {},
            data: tickets
        })
    } catch(error) {
        next(error);
    }

}

module.exports = {
    sendReplyToTicket,
    closeTicket,
    getTickets
}