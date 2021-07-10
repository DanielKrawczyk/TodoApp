import { atom } from 'recoil';
import createUser from './createUser';

const userID = atom({
    key:"User ID info",
    default: createUser()
})

export default userID;