import React from 'react';
import './App.css';  // Keep this line if you have custom styles

import TodoApp from './components/TodoApp';  // Import from TodoApp component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Your Todo List Application
        </p>
        <TodoApp />
      </header>
    </div>
  );
}

export default App;
