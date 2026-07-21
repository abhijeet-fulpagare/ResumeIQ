import mongoose from "mongoose";


const blackListTokenSchema = new mongoose.Schema({
    blackListToken: {
        type: String,
        required:[true,"blackListToken is required"]
    },
    expiresAt: {
        type: Date,
        required: true,
        index:{expires:0}
    }
}, {
    timestamps:true
})

const blackListTokenModel = mongoose.model("blackListTokens", blackListTokenSchema);

export default blackListTokenModel;