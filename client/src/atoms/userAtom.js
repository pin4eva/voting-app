import { atom } from "recoil";

export const UserAtom = atom({
    key: "UserAtom",
    default: null
})

export const UsersAtom = atom({
    key: "UsersAtom",
    default:[]
})