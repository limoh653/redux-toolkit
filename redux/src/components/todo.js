// src/components/Todos.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todoSlice'; // Adjust the import path based on your project structure

function Todos() {
  // Access todos array from state.todos.todos
  const todos = useSelector((state) => state.todos.todos); 
  const dispatch = useDispatch();

  return (
    <div className="todos-container">
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            <div>{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <div className="text-gray-400">No todos available.</div>
      )}
    </div>
  );
}

export default Todos;
