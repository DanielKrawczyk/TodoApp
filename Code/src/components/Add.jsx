import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import charState from '../recoils/characters';


function Add(props) {
    const [ char, setChar ] = useRecoilState(charState);
    const [ msg, setMsg ] = useState('')

    const loading = document.getElementById('loading'),
    finished = document.getElementById('finished');

    async function postTodo() {
        if (char > 200) {
            props.onInfo('It\'s soooo many letters! I\'m not sure I can handle it :(')
            return;
        } else if (char < 5) {
            props.onInfo('Oh, come on! Don\'t give me empty task! At least 5 characters would be nice :)')
            return;
        }
        loading.classList.remove('invis');

        const post = {
            title: document.getElementById('title').value,
            completed: false
        }

        const res = await fetch('https://gorest.co.in/public-api/users/125/todos', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':'Bearer a72dccbb572f8052c337da5c29c96abfe9096b6207999d422cc88b28ec6e55a9'
            },
            body: JSON.stringify(post)
        })
        const data = res.json();
        loading.classList.add('invis');
        showMessage(data.code);
        finished.classList.remove('invis');
        props.onRefresh();
        setChar(0);
        return data;
    }

    function showMessage(res) {
        if (res >= 400) {
            setMsg('Ooops, something bad happened to Mr Server! Try again later :/')
        } else {
            setMsg('New task added succesfully!');
        }
    }

    function checkCount() {
        if (char > 200) {
            document.getElementById('maxValue').classList.add('red');
        } else if (char <= 200) {
            if (document.getElementById('maxValue').classList.contains('red')) {
                document.getElementById('maxValue').classList.remove('red');
            }
        }
    }

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
                    postTodo()
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
                }}>
                    Utwórz nową notatkę!
                </button>
                <Link to="/"><button className="btn r">Powrót do listy</button></Link>
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