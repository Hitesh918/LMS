const express = require('express');

const { studentController } = require('../../controllers');

const studentRouter = express.Router();

studentRouter.post('/signup', studentController.signup);

module.exports = studentRouter;
