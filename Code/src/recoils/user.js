import { atom } from 'recoil';
let id = -1;

if ("id" in localStorage) {
    id = JSON.parse(localStorage.getItem("id"));
}

const userID = atom({
    key:"User ID info",
    default: id
})

export default userID;