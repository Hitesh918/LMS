const express = require('express');

const { adminController } = require('../../controllers');

const adminRouter = express.Router();

adminRouter.get('/applications', adminController.getAllStudentApplications);

module.exports = adminRouter;