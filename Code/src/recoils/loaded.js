import { atom } from 'recoil';

const loadState = atom({
    key: 'is loaded',
    default: false
})

export default loadState;