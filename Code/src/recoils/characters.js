import { atom } from 'recoil';

const charState = atom({
    key: 'characters',
    default: 0
})

export default charState;