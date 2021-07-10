import fetching from '../components/fetch';

export default async function createUser() { // Check if user exists in localStorage, and if not create new

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

    const newUser = await fetching.fetchPOST('users/', "POST", post); // Call a function that creates new user
    localStorage.setItem("id", JSON.stringify(newUser.data.id)); // Save user to localStorage to prevent creating new one after reload
    return newUser.data.id; // Return new id for the recoil value
}