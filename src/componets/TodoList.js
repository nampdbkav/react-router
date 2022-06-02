import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Outlet } from "react-router-dom";
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
                <Outlet />
                <ul className="todo-list">
                    {todos.map((todo, index) => {
                        return (<TodoItem
                            style={{ position: "relative" }}
                            key={todo.id}
                            todo={todo}
                            index={index}
                        />)
                    })}
                </ul>
            </section>
            <Footer
                countActive={countActive}
                clearComplete={clearComplete}
            />
            <div style={{ margin: '30px auto 0 auto', textAlign: 'center' }}>
                <Link to='*'><button>Go to 404</button></Link>
            </div>
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