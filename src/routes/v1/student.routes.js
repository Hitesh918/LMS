const express = require('express');

const { studentController } = require('../../controllers');

const studentRouter = express.Router();

studentRouter.post('/', studentController.addStudent);

module.exports = studentRouter;
