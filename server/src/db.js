import mongoose from "mongoose";
import config from "./utils/config";

export const connectDB = async () => {
    try {
        const db = await mongoose.connect(config.MONGO_URI);
        console.log(`mongodb connected to ${db.connection.host}`);
        return db;
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}
