import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getListTodo } from '../actions/action';
import Footer from './Footer';

const FilterComplete = ({ todosList, getTodo }) => {

    const { todos } = todosList

    useEffect(() => {
        getTodo()
    }, [])

    const todo = [...todos].filter(t => t.complete)

    return (
        <div>
            <ul className="todo-list" style={{ position: "relative" }}>
                {todo.map((todo, index) => (
                    <li key={todo.id}>
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
                ))}
            </ul>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todosList: state.todoList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTodo: (params) => {
            dispatch(getListTodo(params))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterComplete);