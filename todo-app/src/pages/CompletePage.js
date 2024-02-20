import React from 'react';
import TodoList from '../components/TodoList';

function UpNextPage({ todos, setTodos }) {
  return (
    <div className="page">
      <h2>Complete</h2>
      <TodoList todos={todos} setTodos={setTodos} category="upnext" />
    </div>
  );
}

export default UpNextPage;

// Similarly, create InProgressPage.js and CompletePage.js with similar structures.
