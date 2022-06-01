import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './css/Todo.css'
import TodoList from './componets/TodoList';

const App = () => {
  return (
    <BrowserRouter>
      <TodoList />
    </BrowserRouter>
  )
}

export default App;
