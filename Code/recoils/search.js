import { atom } from 'recoil';
// Search engine
const searchState = atom({
    key: 'search temp data',
    default: {
        keyword: '',
        data: []
    }
})

export default searchState;