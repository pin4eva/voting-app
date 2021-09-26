import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: String,
    googleId: String,
    name: {type: String, required: true},
    image: String,
    isAdmin: {type:Boolean, default: false}
    
});

export default mongoose.model("User", UserSchema);

