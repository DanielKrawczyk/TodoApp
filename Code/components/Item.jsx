import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import Top from './Top';
import Task from './Task';
import dataState from '../recoils/data';
import searchState from '../recoils/search';
import infoState from '../recoils/info';
import fetching from './fetch';

function Item(props) {
    const data = useRecoilValue(dataState), // Recoil value from data.js
    resetData = useResetRecoilState(dataState), // Set recoil value from data.js to default
    search = useRecoilValue(searchState), // State with search keyword and data
    setInfo = useSetRecoilState(infoState), // For showing info of error
    loading = document.getElementById('loading'), // Loading screen

    { fetchDELETE, fetchPOST } = fetching; // Destructuring fetching object

    // Check the type of the filter (or if there is no filter) and also check data status and return proper elements
    function returnProperElements(type) {
        let tasks; // For futher use

        switch (type) {
            case 'FILTER_UNDONE':
                tasks = data.undone;
                break;
            case 'FILTER_DONE':
                tasks = data.done;
                break;
            case 'FILTER_SEARCH':
                tasks = search.data;
                break;
            default:
                tasks = data.all;
                break;
        };

        switch(data.status) {
            case 'NO_DATA': // When there is no data fetched from server
                return (
                    <div id="loading">
                        <h2>
                            Loading... 
                            <svg id="pencil" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </h2>
                    </div>
                );
            case 'NO_TASKS': // When data is fetched, but there is nothing
                return (
                    <div className="result">
                        Looks like there are no tasks available. Beer and chill? &#127866;&#128526;
                    </div>
                );
            case 'CONNECTION_ERR': // When something bad happen
                return (
                    <div className="result">
                        Oh no, something bad happened to the internet! &#128552; Check your connection or try again later! &#128521;
                    </div>
                );
            default: // When data is fetched and ready to use
                let nr = 0;
                if (tasks.length === 0) {
                    let info;
                    switch(type) { // All data is ready to use, but there is no filtered data
                        case 'FILTER_SEARCH':
                            info = <p>Looking for something particular? Let me help you! &#128526;</p>;
                            break;
                        case 'FILTER_DONE':
                            info = <p>Looks like there are no tasks available. What about adding some new challenges? &#128526;</p>;
                            break;
                        case 'FILTER_UNDONE':
                            info = <p>Looks like there are no tasks available. Beer and chill? &#127866;&#128526;</p>;
                            break;
                        default:
                            info = <p>Looks like there are no tasks available. Beer and chill? &#127866;&#128526;</p>;
                    }
                    return (
                        <div className="result">
                            {info}
                        </div>
                    )
                } 
                return (
                    tasks.map(el => {nr++;
                        return <Task key={el.id} item={el} nr={nr} onDelete={(x) => deleteTask(x)} onInfo={(x) => showInfo(x)} onUpdate={(x, y, z) => updateTask(x, y, z)} />
                    })
                );
        };
    };

    // Check edited note length before posting
    function checkEdited(val) {
        if (val.length > 200) {
            props.showInfo('Too many characters! I can\'t handle it! :(');
            return false;
        } else if (val.length < 5) {
            props.showInfo('Even a small task need some words to describe. Try at least 5 characters! :)')
            return false;
        } else {
            return true;
        };
    };

    // Updating task to server
    async function updateTask(type, item, value) {
        let patch = {}; // Preparing grounf for the posting data

        switch (type) { // Checking the type of the posting data
            case 'DONE':
                patch = {
                    status: "completed"
                };
                break;
            case 'UNDONE':
                patch = {
                    status: "pending"
                };
                break;
            case 'EDITED':
                if(!checkEdited(value)) return;
                patch = {
                    title: value,
                };
                break;
            default:
                return;
        };
        loading.classList.remove('invis'); // Turn on loading screen

        const data = await fetchPOST(`todos/${item.id}`, "PATCH", patch); // POST data to server

        resetData(); // Set recoil value in data.js to default
        loading.classList.add('invis'); // Turn off loading screen
        return data; // Return server response for no reason
    };

    // Deleting task from server
    async function deleteTask(x) {
        let check; // Preparing ground for confirm window
        if (x.completed === false) { // If task is not completed yet
            check = window.confirm('Do you reaaally want to delete this task? It seems it\'s not done yet :/');
        } else {
            check = window.confirm('Do you really want to delete this task? It\'s done, so no problem ;)');
        }
        if (check) { // If confirm window returns true
            loading.classList.remove('invis'); // Turn on loading screen

            const data = await fetchDELETE(`todos/${x.id}`); // DELETE data from server

            resetData(); // Set recoil value in data.js to default
            loading.classList.add('invis'); // Turn off loading screen
            return data; // Return server response for no bloody reason
        };
    };

    // Show proper info or error on screen
    function showInfo(txt) {
        setInfo(txt);
        document.getElementById('info').classList.remove('invis');
    };

    return (
        <div className="main">
            <Top />
            {returnProperElements(props.type)}
        </div>
    )
}

export default Item;