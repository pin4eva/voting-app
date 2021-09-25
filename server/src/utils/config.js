import dotenv from "dotenv";

dotenv.config();

const config = {
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost/voting",
    SECRET: process.env.SECRET || "kjdshkdkdfsksfdikj",

}

export default config;