import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { createToken } from '../lib/jwt-token-generator.js';
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({ users });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error getting all users' });
    }
};
export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Validition for Existing Email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already in use' });
        }
        // Incrpyting Password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Creating New user
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        return res.status(201).json({ message: 'Signed Up', user });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User is not Registered' });
        }
        const isPassword = await bcrypt.compare(password, user.password);
        if (isPassword)
            return res.status(401).json({ message: 'Incorrect Password' });
        const token = createToken(user._id.toString(), user.email, '7d');
        const expires = new Date(Date.now() + 7 * 60 * 60 * 1000);
        res.clearCookie('jwt_token');
        res.cookie('jwt_token', token, {
            path: '/',
            domain: 'localhost',
            expires,
            sameSite: 'none',
            httpOnly: true,
            signed: true,
        });
        res.status(200).json({ message: 'Logged In Sucessfully' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};
//# sourceMappingURL=user-handler.js.map