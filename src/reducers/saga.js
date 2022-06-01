import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getListTodoSuccess } from '../actions/action';
import { getTodosData } from './api';

//Fetch Todos
function* getListTodoSaga() {
    try {
        const data = yield call(getTodosData);
        yield put(getListTodoSuccess(data));
    } catch (e) {
        console.log(e.message);
    }
}

function* todosSaga() {
    yield takeLatest('GET_LIST_TODO', getListTodoSaga);
}

function* todos() {
    yield all([call(todosSaga)]);
}

export default todos;