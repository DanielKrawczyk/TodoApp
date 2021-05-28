import React, { useState } from 'react';

function Edit(props) {
    const [ char, setChar ] = useState(0);
    const { nr, txt, item } = props;

    return (
        <React.Fragment>
            <div className="editing-txt">
                <textarea name="edit" placeholder={txt} id={`edited${nr}`} onChange={e => setChar(e.target.value.length)}></textarea>
                <p>{char} / 200</p>
            </div>
            <button className="btn g" onClick={() => {
                const value = document.getElementById(`edited${nr}`).value;
                props.onUpdate('EDITED', item, value);
            }}>
                Save
            </button>
        </React.Fragment>
    )
}

export default Edit;