import axios from 'axios';

//Fetch Todo
export const getTodosData = () => {
    return axios.get(`https://627c69afe5ac2c452aefc225.mockapi.io/api/todos`);
};