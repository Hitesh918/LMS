const { application } = require("express");
const {AdminService} = require('../services');
const {ApplicationRepository} = require('../repositories');

const adminService = new AdminService(new ApplicationRepository());
class AdminController {
    constructor(service = adminService) {
        this.adminService = service;
    }

    // Get all student applications
    async getAllStudentApplications(req, res) {
        try {
            const applications = await this.adminService.getAllStudentApplications();
            res.status(200).json(applications);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = AdminController;