const Application = require('../models/application.model');
class ApplicationRepository {

    // create a new application
    async createApplication(applicationData) {
        try {
            const application = await Application.create({ 
                username: applicationData.username,
                documents: applicationData.documents
            });
            return application;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    //get all applications
    async getAllApplications() {
        try {
            const applications = await Application.find({});
            return applications;
        }
        catch (error) {
            console.log(error);
            throw error;
        }

    }

}

module.exports = ApplicationRepository;