const User = require('../models/user.model');

class UserRepository {
    // create a new user
    async createUser(userData) {
        try {
            const user = await User.create({
                name: userData.name,
                username: userData.username,
                password: userData.password
            });
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    //find user by username
    async findUserByUsername(username) {
        try {
            const user = await User.findOne({ username: username });
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = UserRepository;