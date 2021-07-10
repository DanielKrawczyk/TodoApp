import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import dataState from "../recoils/data";
import userID from '../recoils/user';
import infoState from '../recoils/info';
import fetching from './fetch';


function Add() {
    const [ char, setChar ] = useState(0), // For character count
    resetData = useResetRecoilState(dataState), // Reset recoil value from data.js to default
    user = useRecoilValue(userID), // Get recoil value from user.js
    [ msg, setMsg ] = useState(''), // Set local state of string
    setInfo = useSetRecoilState(infoState), // Set recoil value in info.js
    loading = document.getElementById('loading'), // Loading screen
    finished = document.getElementById('finished'); // Message screen

    // Adding new task to server
    async function postNewTask() {

        if (char > 200) { // Max
            showInfo('It\'s soooo many letters! I\'m not sure I can handle it :(')
            return;
        } else if (char < 5) { // Min
            showInfo('Oh, come on! Don\'t give me empty task! At least 5 characters would be nice :)')
            return;
        }

        loading.classList.remove('invis'); // Turn on loading screen

        // Prepare post data
        const post = {
            user_id: user,
            title: document.getElementById('title').value,
            status: "pending",
            due_on: '2022-06-06T00:00:00.000Z'
        }

        try {
            const data = await fetching.fetchPOST(`users/${user}/todos`, "POST", post); // POST data to server
            if (data.status === 422) return setMsg('Something go wrong! Please try again later!');
            setMsg('New task added succesfully!'); // Prepare message for successful POST
            resetData(); // Reset recoil value from data.js to default
            return data; // Return response for no reason
            
        } catch (err) { // If there is some errors
            setMsg('Ooops, something bad happened to the Internet! Try again later :/');
        } finally {
            finished.classList.remove('invis'); // Show message screen
            loading.classList.add('invis'); // Remove loading sreen
            setChar(0); // Reset character count
        }
    }

    // Check character count
    function checkCount() {
        if (char > 200) { // Max
            document.getElementById('maxValue').classList.add('red');
        } else if (char <= 200) { // Fine
            if (document.getElementById('maxValue').classList.contains('red')) {
                document.getElementById('maxValue').classList.remove('red');
            }
        }
    }

    // Show info or error
    function showInfo(txt) {
        setInfo(txt);
        document.getElementById('info').classList.remove('invis');
    };

    return (
        <div className="add">
            <div className="add-title">
                <h1>Let's add some new challenges!</h1>
            </div>
            <div className="add-form">
                <p><b>{char} / <span id="maxValue">200</span></b></p>
                <textarea id="title" onChange={e => {
                    setChar(e.target.value.length)
                    setTimeout(() => {
                        checkCount();
                    }, 200);
                }}></textarea>
                <br />
                <br />
                <button className="btn g m-r" onClick={() => {
                    postNewTask();
                }}>
                    Add new note!
                </button>
                <Link to="/"><button className="btn r">Go back to list!</button></Link>
            </div>
            <div id="finished" className="invis">
                <span>
                    <h2>{msg}</h2>
                    <Link to="/"><button className="btn g" onClick={() => finished.classList.add('invis')}>Let's go back to work!</button></Link>
                </span>
            </div>
        </div>
    )
}
 
export default Add;