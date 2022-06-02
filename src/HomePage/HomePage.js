import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getListTodo } from '../actions/action';

const HomePage = ({ todosList, getTodo }) => {
    const { todos } = todosList;

    useEffect(() => {
        getTodo()
    }, [])

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Index</th>
                        <th>Text</th>
                        <th>Complete</th>
                    </tr>
                    {todos.map((todo, index) => (
                        <tr>
                            <th>{index + 1}</th>
                            <th>{todo.text}</th>
                            <th>{todo.complete.toString()}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        todosList: state.todoList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTodo: (params) => {
            dispatch(getListTodo(params))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);