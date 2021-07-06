// Server access token
const accessToken = "a72dccbb572f8052c337da5c29c96abfe9096b6207999d422cc88b28ec6e55a9";

// Default GET method
async function fetchGET(url) {
    const res = await fetch(url);
    const data = res.json();
    return data;
}

// Default DELETE method
async function fetchDELETE(url) {
    const res = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Authorization':`Bearer ${accessToken}`
        }
    });
    const data = res.json();
    return data;
}

// Default POST method
async function fetchPOST(url, method, post) {
    const res = await fetch(url, {
        method: method,
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':`Bearer ${accessToken}`
        },
        body: JSON.stringify(post)
    })
    const data = res.json();
    return data;
}

const fetching = { fetchGET, fetchPOST, fetchDELETE, accessToken };

export default fetching;