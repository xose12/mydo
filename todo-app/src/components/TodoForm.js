import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('upnext');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text, category);
      setText('');
    }
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="upnext">Up Next</option>
          <option value="inprogress">In Progress</option>
          <option value="complete">Complete</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TodoForm;
