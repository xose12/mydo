// TodoBox.js - Todo Input Component
import React, { useState } from 'react';

const TodoBox = ({ onAddTodo }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || description.trim() === '') {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      name,
      description,
      status: 'upNext',
    };
    onAddTodo(newTodo);
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoBox;
