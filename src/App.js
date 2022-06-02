import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './css/Todo.css'
import TodoList from './componets/TodoList';

import NotFound from './NotFound/NotFound';
import HomePage from './HomePage/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="topnav">
        <Link to='/'>Home Page</Link>
        <Link to='/todo'>Todo App</Link>
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='/todo' element={<TodoList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
