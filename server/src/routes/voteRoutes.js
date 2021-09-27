import { Router } from "express";
import { Candidate, Election, Vote } from "../models/Vote";
import { auth } from "../utils/auth";



const router = Router();

// Create Candidate
router.post("/candidate/create", auth, async (req, res) => {
   
     if(!req.user.isAdmin) return res.status(403).send("Unauthorized")
    const { election } = req.body;
    try {
        let candidate = await Candidate.create(req.body);
        await Election.findByIdAndUpdate(
            election,
            { $addToSet: { candidates: candidate.id } },
            {new:true}
        )
        candidate = await Candidate.findById(candidate._id).populate("user", "_id name")
            .populate("election", "_id type year")
  
        return res.send(candidate);
    } catch (error) {
        res.send(error);
    }
})

// Get Candidates
router.get("/candidate", async (req, res) => {
    try {
        const candidates = await Candidate.find()
            .populate("user", "_id name")
            .populate("election", "_id type year")
        
        res.send(candidates);
    } catch (error) {
        res.send(error);
    }
})

router.delete("/candidate/:id", auth, async (req, res) => {
    if(!req.user.isAdmin) return res.status(403).send("Unauthorized")
    try {
        const candidate = await Candidate.findByIdAndDelete(req.params.id);
        // await Election.updateOne({_id: candidate.election},{$pullAll:{voters:}})
        return res.send(candidate);
    } catch (error) {
        res.send(error);
    }
})

//election
router.post("/election/create", auth, async (req, res) => {
     if(!req.user.isAdmin) return res.status(403).send("Unauthorized")
    try {
        const election = await Election.create(req.body);
        res.send(election);
    } catch (error) {
        res.send(error)
    }
})

// set current Election
router.post("/election/current", auth, async (req, res) => {
     if(!req.user.isAdmin) return res.status(403).send("Unauthorized")
     await Election.updateMany({},{$set:{isCurrent:false}});
    try {
        const election = await Election.findOneAndUpdate({ _id: req.body.election },{$set:{isCurrent:true}},{new:true});
        res.send(election);
    } catch (error) {
        res.send(error);
    }
})
router.get("/election", async (req, res) => {
    try {
        const elections = await Election.find();
        res.send(elections)
    } catch (error) {
        res.send(error);
    }
})


router.get("/election/currect", async (req, res) => {
    try {
        const election = await Election.findOne({ isCurrent: true })
            .populate({
                path: "candidates",
                populate: { path: "user", select: "_id image name" }

            });
        res.send(election)

    } catch (error) {
        res.send(error);
    }
})

router.get("/election/single/:id", async (req, res) => {
    try {
        const election = await Election.findById(req.params.id)
            .populate({
                path: "candidates",
                populate: {path: "user", select:"_id image name"}

            })
        res.send(election)
    } catch (error) {
        res.send(error);
    }
})


router.delete("/election/:id", auth, async (req, res) => {
     if(!req.user.isAdmin) return res.status(403).send("Unauthorized")
    try {
        const election = await Election.findById(req.params.id);
        await Candidate.deleteMany({ _id: { $in: election.candidates } });
        election.remove();
        res.send(election)
    } catch (error) {
        res.send(error);
    }
})

router.post("/create", auth, async (req, res) => {
    
    const { election, voter, candidate } = req.body;
    if (!election || !voter || !candidate) return res.status(500).send("Include an election, voter or candidate");

    const ele = await Election.findById(election);

    if (ele.voters.includes(voter)) return res.status(400).send("You have voted before");

    try {
        // create vote
        const vote = await Vote.create(req.body);

        // add the vote to a candidate
        await Candidate.findByIdAndUpdate(
            candidate,
            {$addToSet:{votes:vote.id}}
        ).catch((err) => {
            return res.status(500).send(err);
        })
        // add the voter to Election;
        await Election.findByIdAndUpdate(election, { $addToSet: { voters: voter } });
        res.send(vote);
    } catch (error) {
        res.send(error);
    }
})


// Get votes

// Get vote

// Update vote


// Delete vote


export { router as voteRoutes };


       

