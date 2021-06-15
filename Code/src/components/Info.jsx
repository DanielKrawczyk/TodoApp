function Info(props) {
    const { info } = props;

    return (
        <div id="info" className="invis">
            <span>
                <h2>{info}</h2>
                <button className="btn g" onClick={() => document.getElementById('info').classList.add('invis')}>Okay!</button>
            </span>
        </div>
    )
}

export default Info;