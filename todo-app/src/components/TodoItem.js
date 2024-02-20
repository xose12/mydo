import React from 'react';

function TodoItem({ todo, todos, setTodos }) {
  const handleRemove = () => {
    setTodos(todos.filter((t) => t !== todo));
  };

  return (
    <div className="todo-item">
      <p>{todo.text}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}

export default TodoItem;
