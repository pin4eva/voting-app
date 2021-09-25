import { atom } from "recoil";

export const ElectionAtom = atom({
	key: "ElectionAtom",
	default: [],
});

export const CandidatesAtom = atom({
	key: "CandidatesAtom",
	default: [],
});

export const CurrentCandidates = atom({
	key: "CurrentCandidates",
	default: [],
});
