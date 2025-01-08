import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';
import './AddTodo.css'; // Import the CSS file

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="add-todo-form">
      <input
        type="text"
        className="add-todo-input"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="add-todo-button">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
