import mongoose from "mongoose";

const ElectionSchema = new mongoose.Schema({
    type: {type:String, required:true},
    year: {type:String, required:true},
    candidates: [{type: mongoose.Types.ObjectId, ref:"Candidate"}],
    voters: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    isCurrent: {type:Boolean,default:false}
}, {
    timestamps:true
})

const VoteSchema = new mongoose.Schema({
    election: {type: mongoose.Types.ObjectId, ref: "Election"},
    voter: { type: mongoose.Types.ObjectId, ref: "User" },
    candidate:{ type: mongoose.Types.ObjectId, ref: "Candidate" }
}, {
    timestamps:true
})

// const VoteCountSchema = new mongoose.Schema({
//     CandidateA: { type: mongoose.Types.ObjectId, ref: "User" },
//     CandidateB: { type: mongoose.Types.ObjectId, ref: "User" },
//     CandidateC: { type: mongoose.Types.ObjectId, ref: "User" }
// }),

const CandidateSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    course: String,
    votes: [{ type: mongoose.Types.ObjectId, ref: "Vote" }],
    election: {type: mongoose.Types.ObjectId, ref: "Election"}
    
});

const Vote = mongoose.model("Vote", VoteSchema);
const Election = mongoose.model("Election", ElectionSchema);
const Candidate = mongoose.model("Candidate", CandidateSchema);
// const VoteCount = mongoose.model("VoteCount", VoteCountSchema);

export {
    Vote,
    Election,
    Candidate,
    // VoteCount
}