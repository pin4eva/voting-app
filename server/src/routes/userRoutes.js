import { Router } from "express";
import User from "../models/User";


const router = Router();

// Get Users
router.get("/", async (req, res) => {
    try {
        const users = await User.find().select("_id name");
        res.send(users)
    } catch (error) {
        res.send(error);
    }
})

// Get One User
// router.get("/", async (req,res) => {
//     try {
//         const user = await User.findOne.select(token)
//     } catch (error) {
//         res.send(error);
//     }
// })


export {router as userRoutes}