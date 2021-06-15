import { atom } from 'recoil';

const dataState = atom({
    key: 'data',
    default: {
        status: 'NO_DATA',
        all: [],
        undone: [],
        done: []
    }
})

export default dataState;