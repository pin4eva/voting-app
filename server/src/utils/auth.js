import jwt from "jsonwebtoken";
import config from "./config";

export const auth = async (req, res, next) => {
    let token = req.headers.authorization || "";
    if (!token) return res.status(403).send("No token included");

    jwt.verify(token, config.SECRET, (err, data) => {
        if (err) return res.status(403).send("Invalid token")
     
        next()
    });
    
 
   
}