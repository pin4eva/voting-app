import cors from "cors";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import { connectDB } from "./db";
import User from "./models/User";
import { Candidate, Election, Vote } from "./models/Vote";
import { authRoutes } from "./routes/authRoutes";
import { userRoutes } from "./routes/userRoutes";
import { voteRoutes } from "./routes/voteRoutes";


const PORT = process.env.PORT || 8000;
const app = express();

// Middlewares
app.use(cors({ origin: ["http://localhost:3000", "https://voting.com"], credentials: true }));
app.use(express.json());



// custom routes
app.get("/", (_, res) => res.send("Home"));

app.use("/auth", authRoutes);
app.use("/vote", voteRoutes);
app.use("/user", userRoutes);



// server functions;
const server = http.createServer(app);

export const io = new Server(server, { cors: { origin: ['http://localhost:3000'] } });

const startServer = async () => {
    try {
        await connectDB();

        io.on("connection", (socket) => {
            console.log("websocket connected");
            socket.on("voted", async (data) => {
             
            
                const { election, voter, candidate } = data;
                if (!election || !voter || !candidate) return socket.to(socket.id).emit("error-vote", "Include an election, voter or candidate");

                //  const ele = await Election.findById(election);

                // if (ele.voters.includes(voter)) return socket.emit("error-vote", "You have voted before");
                try {
                    const vote = await Vote.create(data);

                    // add the vote to a candidate
                    await Candidate.findByIdAndUpdate(
                        candidate,
                        { $addToSet: { votes: vote.id } }
                    ).catch((err) => {
                        throw new Error(err);
                    });
                    // add the voter to Election;
                    await Election.findByIdAndUpdate(election, { $addToSet: { voters: voter } });
                    const user = await User.findById(voter).select("_id name");
                    io.emit("user-voted",user.name + " just voted")
                    io.emit('vote-response', vote);
                } catch (error) {
                    throw new Error(error);
                }
                // io.emit("vote-response",data)
            });
        });
        server.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

startServer();