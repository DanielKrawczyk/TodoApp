import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import dataState from '../recoils/data';
import searchState from '../recoils/search';

function Top() {
    const data = useRecoilValue(dataState),
    [ search, setSearch ] = useRecoilState(searchState);

    function resetSearchVisibility() {
        const elem = document.getElementById('search').classList;
        if (!elem.contains('invis-hide')) {
            elem.add('invis-hide');
        }
    }

    return (
        <React.Fragment>
            <div className="main-title">
                <h1>Hello! I hope you're feeling great today!</h1>
                <h2>Here's some of your tasks!</h2>
            </div>
            
            <div className="main-counter">
                <span className="count m-r">Filter by</span>

                <Link className="m-t" to="/">
                    <span className="count h m-r" onClick={() => resetSearchVisibility()}>
                        <i className="bi bi-card-checklist green"></i> All tasks: {data.all.length}
                    </span>
                </Link>

                <Link className="m-t" to="/done">
                    <span className="count h m-r" onClick={() => resetSearchVisibility()}>
                        <i className="bi bi-check-square green"></i> Tasks done: {data.done.length > 0 ? data.done.length:0}
                    </span>
                </Link>

                <Link className="m-t" to="/undone">
                    <span className="count h m-r" onClick={() => resetSearchVisibility()}>
                        <i className="bi bi-x-square red"></i> Tasks undone: {data.undone.length > 0 ? data.undone.length:0}
                    </span>
                </Link>

                <Link to="/add">
                    <div id="add">
                        <i className="bi bi-plus-lg"></i>
                    </div>
                </Link>

                <Link className="m-t" to="/search">
                    <span className="count h" onClick={() => {
                        const elem = document.getElementById('search').classList;
                        if (elem.contains('invis-hide')) {
                            elem.remove('invis-hide');
                        } else {
                            elem.add('invis-hide');
                        }
                    }}>
                        <i className="bi bi-search"></i>
                    </span>
                </Link>

                <div className="invis-hide" id="search">
                    <input type="text" placeholder={search.keyword} onChange={c => {
                        const filter = data.all.filter(f => f.title.includes(c.target.value));
                        setSearch({
                            keyword: c.target.value,
                            data: filter
                        });
                    }}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Top;