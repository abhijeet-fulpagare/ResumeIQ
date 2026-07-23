import dotenv from "dotenv";
dotenv.config();



if (!process.env.PORT)
{
    throw new Error("PORT is not defined in enviromental variable");
}

if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in enviromental variable");
}

if (!process.env.JWT_SECRET)
{
    throw new Error("JWT_SECRET is not defined in enviromental variable");
}

if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not defined in enviromental variable");
}

const config = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY
}

export default config;