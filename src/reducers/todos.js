const INITIAL_STATE = {
    todos: [],
    load: false
};

const todosReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        //Fetch Todo
        case 'GET_LIST_TODO': {
            return {
                ...state,
                load: true,
            };
        }
        case 'GET_LIST_TODO_SUCCESS': {
            const { data } = action.payload;
            return {
                ...state,
                todos: data,
                load: false,
            };
        }
        default:
            return state;
    }
}

export default todosReducer;