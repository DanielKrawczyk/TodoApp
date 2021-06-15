import { selector } from 'recoil';
import dataState from './data';

// Dla przetestowania działania recoil selector

const doneState = selector({
    key: 'task-done',
    get: ({get}) => {
        const data = get(dataState);
        if (data.status !== 'READY') return 0;
        const done = data.all.filter(f => f.completed === true);
        
        return done;
    }
})

export default doneState;