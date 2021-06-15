import { selector } from 'recoil';
import dataState from './data';

// Dla przetestowania działania recoil selector

const undoneState = selector({
    key: 'task-undone',
    get: ({get}) => {
        const data = get(dataState);
        if (data.status !== 'READY') return 0;
        const undone = data.all.filter(f => f.completed === false);
        
        return undone;
    }
})

export default undoneState;