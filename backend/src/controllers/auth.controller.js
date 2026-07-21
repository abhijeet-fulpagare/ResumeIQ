import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import config from "../config/config.js";
import jwt from "jsonwebtoken";
import blackListTokenModel from "../models/blackListToken.model.js";

const registerController = async (req, res) => {
    
    try {

        const { username, email, password } = req.body;

        if (!username || !email || !password)
        {
            return res.status(400).json({
                success: false,
                message: "Username, email, and password are required."
            });
        }
        
        const isUserExists = await userModel.findOne({
            $or: [
                {username},{email}
            ]
        })

        if (isUserExists)
        {
            return res.status(409).json({
                success: false,
                message: "An account with this username or email already exists."
            });
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
                id:user._id,
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


const loginController = async (req, res) => {
    
    try {
        const { email, password } = req.body;

        if (!email)
        {
            return res.status(400).json({
                message:"email is required"
            })
        }

        if (!password)
        {
            return res.status(400).json({
                message: "password is required"
            })

        }

        const user = await userModel.findOne({
            $or:[{email}]
        })

        if (!user)
        {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid)
        {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "7d" });

        res.cookie("token", token);

        return res.status(200).json({
            message: "User Login Successfully",
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


const logoutController = async (req, res) => {
    try {
        const token = req.cookies.token;

        if (!token)
        {
            return res.status(403).json({ message:"Forbidden Token is required"})
        }

        await blackListTokenModel.create({
            blackListToken:token,
            expiresAt:new Date(Date.now() + 24*60*60*1000)
        })

        res.clearCookie("token");

        res.status(200).json({ message: "User log-out Successfully" });
    }catch(err)
    {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}

const getMeController = async (req, res) => {

    try {
        const user = req.user;

        const userData = await userModel.findById(user.id);

        res.status(200).json({
            message: "user details fetch Successfully",
            user: {
                id: userData._id,
                username: userData.username,
                email: userData.email,
            }
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}

export { registerController, loginController, logoutController, getMeController };