// TodoPage.js - Todo Page Component
import React from 'react';
import TodoItem from './TodoItem';

const TodoPage = ({ title, todos, onMoveTodo }) => {
  return (
    <div>
      <h2>{title}</h2>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onMoveTodo={onMoveTodo} />
      ))}
    </div>
  );
};

export default TodoPage;
