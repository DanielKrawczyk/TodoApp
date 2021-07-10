// Server access token
const accessToken = "c66e80da1f19b12bf8f8e5f786204646fc1b0c1db60a25e9e7f44a76766c5960";
const baseURL = "https://gorest.co.in/public/v1/"

// Default GET method
async function fetchGET(url) {
    const res = await fetch(`${baseURL}${url}`);
    if (res.status === 200) {
        return res.json();
    } else {
        return res.status;
    }
}

// Default DELETE method
async function fetchDELETE(url) {
    const res = await fetch(`${baseURL}${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Bearer ${accessToken}`
        }
    });
    return res;
}

// Default POST method
async function fetchPOST(url, method, post) {
    const res = await fetch(`${baseURL}${url}`, {
        method: method,
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Bearer ${accessToken}`
        },
        body: JSON.stringify(post)
    })
    return res;
}

const fetching = { fetchGET, fetchPOST, fetchDELETE, accessToken };

export default fetching;