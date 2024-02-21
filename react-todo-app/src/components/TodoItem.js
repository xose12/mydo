// TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onMoveTodo }) => {
  const handleMoveClick = (newStatus) => {
    onMoveTodo && onMoveTodo(todo.id, newStatus);
  };

  return (
    <div className="TodoItem">
      <div className="TodoItem-details">
        <div className="TodoItem-name">{todo.name}</div>
        <div className="TodoItem-description">{todo.description}</div>
      </div>
      <div className="TodoItem-buttons">
        {todo.status === 'upNext' && (
          <button onClick={() => handleMoveClick('inProgress')}>Start</button>
        )}
        {todo.status === 'inProgress' && (
          <button onClick={() => handleMoveClick('complete')}>Complete</button>
        )}
        {todo.status !== 'complete' && (
          <button onClick={() => handleMoveClick('upNext')}>Move Back</button>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
