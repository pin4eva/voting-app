import { Router } from "express";
import User from "../models/User";
import {auth} from "../utils/auth"


const router = Router();

// Get Users
router.get("/", auth, async (req, res) => {
    
    try {
        const users = await User.find().select("_id name isAdmin");
        res.send(users)
    } catch (error) {
        res.send(error);
    }
})

// Get One User
router.get("/single/:id", auth,  async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        res.send(user)
    } catch (error) {
        res.send(error);
    }
})

router.delete("/single/:id", auth, async (req, res) => {
    if (!req.user.isAdmin) return res.status(403).send("Not permitted to delete user");
    try {
        const user = await User.findById(req.params.id);
        user.remove()
        res.send(user)
    } catch (error) {
        res.send(error);
    }
})

router.post("/admin", auth, async (req, res) => {
    let user = await User.findOne({ _id: req.body._id }).select("-password");
    if (!user) return res.status(404).send("User record not found");
    try {
        await User.updateOne({ _id: user._id }, { $set: { isAdmin: true } }, { new: true });
        res.send(user);

    } catch (error) {
        res.send(error)
    }
} )

export {router as userRoutes}