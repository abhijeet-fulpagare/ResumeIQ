import jwt from "jsonwebtoken"
import config from "../config/config.js";
import blackListTokenModel from "../models/blackListToken.model.js";

const authUser = async (req, res, next) => {
    
    try {
        
        const token = req.cookies.token;

        if (!token)
        {
            if (!token) {
                return res.status(401).json({ message: "Token is required" })
            }
        }

        const isTokenBlackListed = await blackListTokenModel.findOne({ blackListToken: token })
        
        if (isTokenBlackListed)
        {
            return res.status(400).json({ message: "Invalid Token" });
        }

        const decode = jwt.verify(token, config.JWT_SECRET);
        req.user = decode;
        if (!decode)
        {
            return res.status(400).json({ message: "Invalid Token" });
        }

        next();
    } catch (err)
    {
        return res.status(401).json({ message: "Invalid Token" })
        console.log(err)
    }
}

export { authUser };