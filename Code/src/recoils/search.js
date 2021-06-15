import { atom } from 'recoil';

const searchState = atom({
    key: 'search temp data',
    default: {
        keyword: '',
        data: []
    }
})

export default searchState;