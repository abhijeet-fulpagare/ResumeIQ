import dotenv from "dotenv";
dotenv.config();



if (!process.env.PORT)
{
    throw new Error("PORT is not defined in enviromental variable");
}

if (!process.env.MONGO_URI) {
    throw new Error("PORT is not defined in enviromental variable");
}

const config = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI
}

export default config;