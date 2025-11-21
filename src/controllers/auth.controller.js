const NotImplemented = require('../errors/notImplemented.error');
const { AuthService, UserRepository } = require('../services');
const { StatusCodes } = require('http-status-codes');

const authService = new AuthService(new UserRepository());

async function login(req, res, next) {
    try {
        console.log("incoming req body", req.body);
        const loginData = await authService.validateUser(req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully logged in',
            error: {},
            data: loginData
        })
    } catch(error) {
        next(error);
    }
}



module.exports = {
    login
}

