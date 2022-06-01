import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getListTodo } from "../actions/action";
import Footer from "./Footer";
import TodoItem from "./TodoItem";

const TodoList = ({ todosList, getTodo }) => {
    const { todos } = todosList

    useEffect(() => {
        getTodo()
    }, [])

    let countActive = [...todos].filter((todo) => !todo.complete).length;
    let clearComplete = [...todos].some(todo => todo.complete);

    return (
        <div>
            <section className="main">
                <ul className="todo-list">
                    {todos.map((todo, index) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            index={index}
                        />
                    ))}
                </ul>
            </section>
            <Footer
                countActive={countActive}
                clearComplete={clearComplete}
            />
        </div>
    )
}

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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)