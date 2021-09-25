import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: String,
    googleId: String,
    name: {type: String, required: true},
    image: String,
    
});

export default mongoose.model("User", UserSchema);

