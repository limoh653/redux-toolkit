// src/features/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Ensure you are adding the new todo with an id and text
      const newTodo = {
        id: Date.now(),  // Generate a unique id
        text: action.payload,
      };
      state.todos.push(newTodo);  // Add the new todo to the state
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
