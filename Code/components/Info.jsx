import { useRecoilValue } from 'recoil';
import infoState from '../recoils/info';

function Info() { // For display info screen
    const info = useRecoilValue(infoState);

    return (
        <div id="info" className="invis">
            <span>
                <h2>{info}</h2>
                <button className="btn g op" onClick={() => document.getElementById('info').classList.add('invis')}>Okay!</button>
            </span>
        </div>
    )
}

export default Info;