import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique:[true, "Username should be unique"],
        required:[true,"User name is required"]
    },
    email: {
        type: String,
        unique:[true,"Account already exists with this email address"],
        required: [true, "Email name is required"]
    },
    password: {
        type: String,
        required: [true, "Password name is required"]
    }
})

const userModel = mongoose.model("user", userSchema);

export default userModel;