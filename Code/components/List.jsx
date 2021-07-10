import React from 'react';
import { Switch, Route } from "react-router-dom";
import { useRecoilState, useRecoilValue } from 'recoil';
import Add from './Add';
import Item from './Item'
import dataState from '../recoils/data';
import userID from '../recoils/user';
import fetching from './fetch';

function List() {
    const [ data, setData ] = useRecoilState(dataState), // Set and use recoil value from data.js
    user = useRecoilValue(userID), // Use recoil value from user.js

    { fetchGET, accessToken } = fetching; // Destructuring fetching object


    function downloadData() { // Download data from server

        fetchGET(`https://gorest.co.in/public-api/users/${user}/todos?access-token=${accessToken}`) // GET data from server
        .then(res => { // Response
            if (res.code === (200 || 201) && res.data.length === 0) { // If data is fetched succesfully, but there is no tasks

                updateDataState('NO_TASKS');
                
            } else if (res.code >= 400) { // When something go wrong

                updateDataState('CONNECTION_ERR');

            } else if (res.code === (200 || 201) && res.data.length > 0) { // If data is fetched succesfully and ready to use

                updateDataState('READY', res.data, res.data.filter(f => f.completed === false), res.data.filter(f => f.completed === true));

            }
        })
        .catch(err => { // If there is error that I'm not prepared for

            updateDataState('CONNECTION_ERR');
            console.log(`I detected some pointless and unwanted errors! Have a nice tea! ${err}`);

        });
    }


    async function start() { // Start function called after setting recoil value in data.js to default
        const res = await fetchGET(`https://gorest.co.in/public-api/users/${user}?access-token=${accessToken}`); // GET data from server
        if (res.code === 404) {
            if ("id" in localStorage) {
                localStorage.removeItem("id"); // To fix endless loop of checking non existing user (  )
            }
            window.location.reload();
        } // If there is no particular user call that function again (to prevent starting the app without defined user)
        else downloadData();
    }

    if (data.status === "NO_DATA") { // Checks if there was any change in recoil value from data.js (for example setting this recoil value to default)
        start();
    }

    // Update recoil state - data.js, with default values
    function updateDataState(status = 'NO_DATA', all = [], undone = [], done = []) {
        setData({
            status: status,
            all: all,
            undone: undone,
            done: done
        })
    }

    return ( // Using switch to easly swap between add, filter, search or view all data
            <React.Fragment>
                <Switch>
                    <Route exact path="/">
                        <Item />
                    </Route>
                    <Route path="/undone">
                        <Item type="FILTER_UNDONE" />
                    </Route>
                    <Route path="/done">
                        <Item type="FILTER_DONE" />
                    </Route>
                    <Route path="/add">
                        <Add />
                    </Route>
                    <Route path="/search">
                        <Item type="FILTER_SEARCH" />
                    </Route>
                </Switch>
            </React.Fragment>
    );
};

export default List;
