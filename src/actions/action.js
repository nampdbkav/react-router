//Fetch Todo
export const getListTodo = (payload) => {
    return {
        type: 'GET_LIST_TODO',
        payload,
    };
};

export const getListTodoSuccess = (payload) => {
    return {
        type: 'GET_LIST_TODO_SUCCESS',
        payload,
    };
};