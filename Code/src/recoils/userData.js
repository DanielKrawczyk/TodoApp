import { atom } from 'recoil';

const random = Math.random().toString(20).substr(2, 20);
const post = {
    name: random,
    gender: "Male",
    email: `${random}@what.com`,
    status: "Active"
}

const userData = atom({
    key:"data for create new user",
    default: post
})

export default userData;