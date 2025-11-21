const {ApplicationRepository} = require('../repositories');
class AdminService {
    constructor(applicationRepository = new ApplicationRepository()) {
        this.applicationRepository = applicationRepository;
    }

    // Service methods for admin operations would go here

    //get all student applications
    async getAllStudentApplications() {
        try {
            const applications = await this.applicationRepository.getAllApplications();
            return applications;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = AdminService;