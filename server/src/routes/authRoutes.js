import { Router } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../utils/config";
import { auth } from "../utils/auth";

const router = Router();

router.get("/me", auth, async (req, res) => {
      let token = req.headers.authorization || "";
    try {
        const { _id } = jwt.verify(token, config.SECRET);
        const user = await User.findById(_id).select("-password")
     
        res.send(user)
    } catch (error) {
        res.send(error)
    }
})



// User registration;
// router.post("/register", async (req, res) => {
//     const { email, password } = req.body;
//     let user = await User.findOne({ email: email });
//     if (!email) return res.status(403).send("Email field is required");
//     if (user) return res.status(403).send("Email already exist");
//     try {
//         user = await User.create({
//             ...req.body,
//             password: bcrypt.hashSync(password,10)
//      });
//         res.send(user._id);
//     } catch (error) {
//         res.send(error)
//     }
// })

// {
//     "googleId": "110946605139663992685",
//     "imageUrl": "https://lh3.googleusercontent.com/a-/AOh14GiACiZjiQM6ejs61ouXHnBQhNWoh0UGbE8Y12nqqg=s96-c",
//     "email": "pin4eva@gmail.com",
//     "name": "Peter Akaliro",
//     "givenName": "Peter",
//     "familyName": "Akaliro"
// }

router.post("/google", async (req, res) => {
    const { googleId, imageUrl, } = req.body;
    let user = await User.findOne({ googleId });
    if (user) {
        const token = jwt.sign({ _id: user.id }, config.SECRET, { expiresIn: "1hr" });
        return res.send(token);
    }
    try {
        user = await User.create({
            ...req.body,
            image: imageUrl,

        })
        const token = jwt.sign({ _id: user.id }, config.SECRET, { expiresIn: "1hr" });
        return res.send(token);
    } catch (error) {
        res.send(error)
    }
})

router.post('/vmc', (req, res) => {
    console.log(req.body);
    db.collection('voteCounts').insertOne(req.body, (err, data) => {
        if(err) return console.log(err);
        res.send(('saved to db: ' + data));
    })
});



// User Login
router.post("/login", async (req, res) => {
   
    try {
         const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) return res.status(404).send("No record found");
    const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) return res.status(400).send("Email or Password incorrect");
        
        const token = jwt.sign({ _id: user.id }, config.SECRET, { expiresIn: "1hr" });
        
        res.send({_id:user.id, token});
        
    } catch (error) {
        res.send(error);
    }
})


export {router as authRoutes}