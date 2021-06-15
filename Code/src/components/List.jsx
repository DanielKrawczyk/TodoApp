import React from 'react';
import { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import { useRecoilState, useRecoilValue } from 'recoil';
import Add from './Add';
import Task from './Task';
import Top from './Top';
import Info from './Info';
import dataState from '../recoils/data';
import infoState from '../recoils/info';
import loadState from '../recoils/loaded';
import searchState from '../recoils/search';
import userID from '../recoils/user';
import userData from '../recoils/userData';

function List() {
    const [ data, setData ] = useRecoilState(dataState),
    [ info, setInfo ] = useRecoilState(infoState),
    [ isLoaded, setIsLoaded ] = useRecoilState(loadState),
    [ search, setSearch ] = useRecoilState(searchState),
    [ user, setUser ] = useRecoilState(userID),
    postUser = useRecoilValue(userData),
    [ isPosted, setIsPosted ] = useState(false),
    loading = document.getElementById('loading');

    async function fetchData() {
        const res = await fetch(`https://gorest.co.in/public-api/users/${user}/todos?access-token=a72dccbb572f8052c337da5c29c96abfe9096b6207999d422cc88b28ec6e55a9`);
        const data = res.json();
        return data;
    }

    async function fetchUser() {
        const res = await fetch(`https://gorest.co.in/public-api/users/${user}?access-token=a72dccbb572f8052c337da5c29c96abfe9096b6207999d422cc88b28ec6e55a9`);
        const data = res.json();
        return data;
    }

    async function fetchNewUser() {
        const res = await fetch('https://gorest.co.in/public-api/users/', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':'Bearer a72dccbb572f8052c337da5c29c96abfe9096b6207999d422cc88b28ec6e55a9'
            },
            body: JSON.stringify(postUser)
        })
        const data = res.json();
        setIsPosted(true);
        return data;
    }

    function downloadData() {
        if (isLoaded === true) return;
        fetchData()
        .then(res => {
            if (res.code === (200 || 201) && res.data.length === 0) {
                updateDataState('NO_TASKS');
                setIsLoaded(true);

            } else if (res.code === 404) {
                updateDataState('CONNECTION_ERR');

            } else if (res.code === (200 || 201) && res.data.length > 0) {
                updateDataState('READY', res.data, res.data.filter(f => f.completed === false), res.data.filter(f => f.completed === true))
                setSearch({
                    keyword: search.keyword,
                    data: data.all.filter(f => f.title.includes(search.keyword))
                });
                setIsLoaded(true);
            }
        })
        .catch(err => {
            updateDataState('CONNECTION_ERR');
            console.log(`I detected some pointless and unwanted errors! Have a nice tea! ${err}`)
        });
    }

    useEffect(() => {
        fetchUser()
        .then(res => {
            if (res.code === 404 && isPosted === false) {
                fetchNewUser()
                .then(resp => {
                    if (resp !== undefined && resp.data.id !== undefined) {
                        setUser(resp.data.id);
                        localStorage.setItem("id", JSON.stringify(resp.data.id));
                    }
                });
            }
        })
        .then(() => {
            if (user < 0) return;
            downloadData()
        });
    })

    function updateDataState(status = 'NO_DATA', all = [], undone = [], done = []) {
        setData({
            status: status,
            all: all,
            undone: undone,
            done: done
        })
    }

    function checkData(type) {
        let tasks;

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
            case 'NO_DATA':
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
            case 'NO_TASKS':
                return (
                    <div className="result">
                        Looks like there are no tasks available. Beer and chill? &#127866;&#128526;
                    </div>
                );
            case 'CONNECTION_ERR':
                return (
                    <div className="result">
                        Oh no, something bad happened to the internet! &#128552; Check your connection or try again later! &#128521;
                    </div>
                );
            default:
                let nr = 0;
                if (tasks.length === 0) return (
                    <div className="result">
                        Looks like there are no tasks available. Beer and chill? &#127866;&#128526;
                    </div>
                )
                return (
                    tasks.map(el => {nr++;
                        return <Task key={el.id} item={el} nr={nr} onDelete={(x) => deleteTask(x)} onInfo={(x) => showInfo(x)} onUpdate={(x, y, z) => updateTask(x, y, z)} />
                    })
                );
        };
    };

    function createComponent(type) {
        return (
            <div className="main">
                <Top />
                {checkData(type)}
            </div>
        );
    };

    async function deleteTask(x) {
        let check;
        if (x.completed === false) {
            check = window.confirm('Do you reaaally want to delete this task? It seems it\'s not done yet :/');
        } else {
            check = window.confirm('Do you really want to delete this task? It\'s done, so no problem ;)');
        }
        if (check) {
            loading.classList.remove('invis');

            const res = await fetch(`https://gorest.co.in/public-api/todos/${x.id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization':'Bearer a72dccbb572f8052c337da5c29c96abfe9096b6207999d422cc88b28ec6e55a9'
                }
            });
            const data = res.json();
            loading.classList.add('invis');
            setIsLoaded(false);
            return data;
        };

    };

    async function updateTask(type, item, value) {
        let patch = {};

        switch (type) {
            case 'DONE':
                patch = {
                    completed: true
                };
                break;
            case 'UNDONE':
                patch = {
                    completed: false
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
        loading.classList.remove('invis');

        const res = await fetch(`https://gorest.co.in/public-api/todos/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':'Bearer a72dccbb572f8052c337da5c29c96abfe9096b6207999d422cc88b28ec6e55a9'
            },
            body: JSON.stringify(patch)
        });

        const data = res.json();
        setIsLoaded(false);
        loading.classList.add('invis');
        return data;
    };

    function checkEdited(val) {
        if (val.length > 200) {
            showInfo('Too many characters! I can\'t handle it! :(');
            return false;
        } else if (val.length < 5) {
            showInfo('Even a small task need some words to describe. Try at least 5 characters! :)')
            return false;
        } else {
            return true;
        };
    };

    function showInfo(txt) {
        setInfo(txt);
        document.getElementById('info').classList.remove('invis');
    };

    return (
            <React.Fragment>
                <Info info={info}/>
                <Switch>
                    <Route exact path="/">
                        {createComponent()}
                    </Route>
                    <Route path="/undone">
                        {createComponent('FILTER_UNDONE')}
                    </Route>
                    <Route path="/done">
                        {createComponent('FILTER_DONE')}
                    </Route>
                    <Route path="/add">
                        <Add onRefresh={() => setIsLoaded(false)} onInfo={(x) => showInfo(x)} />
                    </Route>
                    <Route path="/search">
                        {createComponent('FILTER_SEARCH')}
                    </Route>
                </Switch>
            </React.Fragment>
    );
};

export default List;
