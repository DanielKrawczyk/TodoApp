import { atom } from 'recoil';
import fetching from '../components/fetch';

async function createUser() {

    if ("id" in localStorage) {
        return JSON.parse(localStorage.getItem("id"));
    }
    const random = Math.random().toString(20).substr(2, 20); // Random string with numbers
    // Preparing post data
    const post = {
        name: random,
        gender: "Male",
        email: `${random}@what.com`,
        status: "Active"
    } 

    const newUser = await fetching.fetchPOST('https://gorest.co.in/public-api/users/', "POST", post); // Call a function that creates new user
    localStorage.setItem("id", JSON.stringify(newUser.data.id)); // Save user to localStorage to prevent creating new one after reload
    return newUser.data.id; // Return new id for the recoil value
}

const userID = atom({
    key:"User ID info",
    default: createUser()
})

export default userID;