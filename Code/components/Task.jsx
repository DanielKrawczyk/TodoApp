import Edit from './Edit';

function Task(props) {
    const { item, nr } = props, // Destructuring props
    { completed, title, created_at, updated_at } = item; // and also task

    // Show or hide edit window after clicking EDIT button
    function editTask(x) {

        const edit = document.getElementById(`edit${x}`).classList;

        if (edit.contains('invis-hide')) {
            edit.remove('invis-hide');
        } else {
            edit.add('invis-hide');
        }
    }

    // Hide all edit windows
    function resetTasks() {
        document.querySelectorAll('.editing').forEach(e => {
            if (!e.classList.contains('invis-hide')) e.classList.add('invis-hide')
        })
    }

    // Show additional info about task (created_at or updated_at)
    function showMoreInfo(nr) {
        const el = document.getElementById(`info${nr}`).classList;
        if (el.contains('show')) {
            el.remove('show');
        } else {
            el.add('show');
        }
    }

    return ( // divs and spans of every task
        <div className="main-list_item">
            <span className="marked">
                {completed ? <h2><i className="bi bi-check-lg green"></i></h2> : <h2><i className="bi bi-x-lg red"></i></h2>}
                <h2>ToDo #{nr}</h2>
            </span>
            <span className="text">
                <p className="point" onClick={() => showMoreInfo(nr)}>{title}</p>
                <div className="text-info fade" id={`info${nr}`}>
                    <span>Created at: {created_at}</span>
                    <span>Last update: {updated_at}</span>
                </div>
            <div className="editing invis-hide" id={`edit${nr}`}>
                <Edit nr={nr} txt={title} item={item} onUpdate={(x, y, z) => props.onUpdate(x, y, z)} />
            </div>
            </span>
            <span className="options">
                {completed ? <h2 onClick={() => props.onInfo('Firstly you need to undone the task!')}><i className="bi bi-pencil edit"></i></h2>:<h2 onClick={() => editTask(nr)}><i className="bi bi-pencil edit"></i></h2>}
                {completed ? <h2 onClick={() => props.onUpdate('UNDONE', item)}><i className="bi bi-x-lg undone"></i></h2>:<h2 onClick={() => {resetTasks();props.onUpdate('DONE', item)}}><i className="bi bi-check-lg done"></i></h2>}
                <h2 onClick={() => props.onDelete(item)}><i className="bi bi-trash trash"></i></h2>
            </span>
        </div>
    )
}

export default Task;