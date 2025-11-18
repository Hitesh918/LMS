const express = require('express');

const studentRouter = require('./student.routes');

const v1Router = express.Router();

// If any request comes and route continues with /students, we map it to studentRouter
v1Router.use('/students', studentRouter);

module.exports = v1Router;
