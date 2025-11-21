const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


class AuthService {
    constructor() {
        this.userRepository = new userRepository();
    }
    async validateUser(username, password) {
        const user = await this.userRepository.findUserByUsername(username);
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        const token = await this.generateToken(user);
        return { role: user.role, token };
    }

    async generateToken(user) {
        const payload = {
            sub: user._id,
            username: user.username,
            role: user.role
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });
        return token;
    }
}

module.exports = AuthService;