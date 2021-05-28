import { atom } from 'recoil';

const infoState = atom({
    key: 'info',
    default: ''
})

export default infoState;