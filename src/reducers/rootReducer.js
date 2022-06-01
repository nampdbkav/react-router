import { combineReducers } from 'redux';
import todosReducer from './todos';

const rootReducer = combineReducers({
    todoList: todosReducer,
});

export default rootReducer;