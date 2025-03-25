import { useState } from 'react';
import './App.css'
import TodoList from './components/todo/TodoList.jsx'

function AppTodo(props) {
  const [todos, setTodos] = useState([
    {id:0, label:'HTML공부'},
    {id:1, label:'CSS공부'},
  ])
  return (
    <div>
      <h2>할일목록</h2>
      <TodoList todos={todos}/>
      <TodoList todos={todos}/>
    </div>
  );
};

export default AppTodo;