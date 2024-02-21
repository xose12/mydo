// TodoApp.js
import React, { useState } from 'react';
import TodoBox from './TodoBox';
import TodoPage from './TodoPage';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const moveTodo = (id, newStatus) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      )
    );
  };

  return (
    <div className="TodoApp">
      <h1>Todo List</h1>
      <TodoBox onAddTodo={addTodo} />
      <div className="TodoPages">
        <TodoPage
          title="Up Next"
          todos={todos.filter((todo) => todo.status === 'upNext')}
          onMoveTodo={moveTodo}
        />
        <TodoPage
          title="In Progress"
          todos={todos.filter((todo) => todo.status === 'inProgress')}
          onMoveTodo={moveTodo}
        />
        <TodoPage
          title="Complete"
          todos={todos.filter((todo) => todo.status === 'complete')}
          onMoveTodo={moveTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;
