// Server access token
const accessToken = "c66e80da1f19b12bf8f8e5f786204646fc1b0c1db60a25e9e7f44a76766c5960";

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