import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/todo';
import ErrorBoundary from './components/ErrorBoundery';


function App() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Todo App</h1>
      
      <ErrorBoundary>
        <AddTodo />
        <Todos />
      </ErrorBoundary>
    </div>
  );
}

export default App;
