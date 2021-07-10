import React from 'react';
import { Switch, Route } from "react-router-dom";
import { useRecoilState, useRecoilValue } from 'recoil';
import Add from './Add';
import Item from './Item'
import dataState from '../recoils/data';
import userID from '../recoils/user';
import fetching from './fetch';
import searchState from '../recoils/search';

function List() {
    const [ data, setData ] = useRecoilState(dataState), // Set and use recoil value from data.js
    [ search, setSearch ] = useRecoilState(searchState), // Set and use recoil value from search.js
    user = useRecoilValue(userID), // Use recoil value from user.js

    { fetchGET, accessToken } = fetching; // Destructuring fetching object


    function downloadData() { // Download data from server

        fetchGET(`users/${user}/todos?access-token=${accessToken}`) // GET data from server
        .then(res => { // Response
            if (res >= 400) { // If data is fetched succesfully, but there is no tasks

                updateDataState('CONNECTION_ERR');
                
            } else if (res.data.length === 0) { // When something go wrong, there was a status 404 before, but the server got shitty update and broke the whole communication

                updateDataState('NO_TASKS');

            } else if (res.data.length > 0) { // If data is fetched succesfully and ready to use

                updateDataState('READY', res.data, res.data.filter(f => f.status === "pending"), res.data.filter(f => f.status === "completed"));
                setSearch({keyword: search.keyword, data: res.data.filter(f => f.title.includes(search.keyword))}); // Fix search engine did not update issue

            }
        })
        .catch(err => { // If there is error that I'm not prepared for

            updateDataState('CONNECTION_ERR');
            console.log(`I detected some pointless and unwanted errors! Have a nice tea! ${err}`);

        });
    }


    async function start() { // Start function called after setting recoil value in data.js to default
        const res = await fetchGET(`users/${user}?access-token=${accessToken}`); // GET data from server
        if (res >= 400) {
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
