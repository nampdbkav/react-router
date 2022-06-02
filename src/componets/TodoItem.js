import React from "react";


const TodoItem = ({ todo, index }) => {
    return (
        <li>
            <div className="first"
                style={{ textDecoration: todo.complete ? 'line-through' : '' }}
            >
                <input type='checkbox'
                    checked={todo.complete}
                    onChange={() => { }}
                />
            </div>
            <div className="double">
                {(index + 1) + ' : ' + todo.text}
            </div>
            <button>Edit</button>
            <button>Delete</button>
        </li>
    )
}

export default TodoItem