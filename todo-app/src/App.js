import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import UpNextPage from './pages/UpNextPage';
import InProgressPage from './pages/InProgressPage';
import CompletePage from './pages/CompletePage';
import './App.css'; // You can style your app in App.css

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, category) => {
    setTodos([...todos, { text, category }]);
  };

  return (
    <div className="app">
      <TodoForm addTodo={addTodo} />
      <div className="todo-container">
        <UpNextPage todos={todos} setTodos={setTodos} />
        <InProgressPage todos={todos} setTodos={setTodos} />
        <CompletePage todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
