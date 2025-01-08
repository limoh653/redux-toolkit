import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todoSlice'; // Adjust the import path based on your project structure
import './todo.css'; // Import the CSS file

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className="todos-container">
      <h1 className="todos-header">Todos</h1>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <div className="todo-text">{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="todo-delete-button"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <div className="no-todos">No todos available.</div>
      )}
    </div>
  );
}

export default Todos;
