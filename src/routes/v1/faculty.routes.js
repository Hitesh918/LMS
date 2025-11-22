const {facultyController} = require('../../controllers');
const express = require('express');

const facultyRouter = express.Router();

facultyRouter.post('/tickets/:ticketId/messages', facultyController.sendReplyToTicket);

facultyRouter.post('/tickets/:ticketId/close', facultyController.closeTicket);

module.exports = facultyRouter;