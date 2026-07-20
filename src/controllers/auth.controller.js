import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import { config } from "dotenv";
import jwt from "jsonwebtoken";



const registerController = async (req, res) => {
    
    try {

        const { username, email, password } = req.body;

        if (!username || !email || !password)
        {
            return res.status(400).json({ message: "Username,email and password is required" });
        }
        
        const isUserExists = await userModel.findOne({
            $or: [
                {username},{email}
            ]
        })

        if (isUserExists)
        {
            return res.status(400).json({ message: "User already exists in the system" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            username,
            email,
            password:hashPassword
        })
    
        const token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "7d" });

        res.cookie("token", token);

        return res.status(201).json({
            message: "User Created Successfully",
            user: {
                username: user.username,
                email: user.email
            }
        })
    } catch (err)
    {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}


export { registerController };