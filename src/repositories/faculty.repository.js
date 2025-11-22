const {Faculty} = require('../models');

class FacultyRepository {
    

    //get faculty by _id
    async getFacultyById(facultyId) {
        try {
            const faculty = await Faculty.findOne({ _id: facultyId });
            return faculty;
        } catch (error) {
            console.log(error);
            throw error;
        }   
    }

}

module.exports = FacultyRepository;