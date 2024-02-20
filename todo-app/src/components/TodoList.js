import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos, category }) {
  const filteredTodos = todos.filter((todo) => todo.category === category);

  return (
    <div className="todo-list">
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}

export default TodoList;
