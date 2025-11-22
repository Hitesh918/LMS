const NotImplemented = require('../errors/notImplemented.error');
const { StudentService } = require('../services');
const { StudentRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const studentService = new StudentService(new StudentRepository());

async function addStudent(req, res, next) {
    try {
        console.log("incoming req body", req.body);
        const newstudent = await studentService.createStudent(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new student',
            error: {},
            data: newstudent
        })
    } catch(error) {
        next(error);
    }
}

async function signup(req, res, next) {
    try {
        console.log("incoming req body", req.body);
        const newstudent = await studentService.signup(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new student',
            error: {},
            data: newstudent
        })
    } catch(error) {
        next(error);
    }
}

async function raiseTicket(req, res, next) {
    try {
        console.log("incoming req body", req.body);
        const ticket = await studentService.raiseTicket(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully raised a new ticket',
            error: {},
            data: ticket
        })
    } catch(error) {
        next(error);
    }
}


module.exports = {
    addStudent,
    signup,
    raiseTicket
}