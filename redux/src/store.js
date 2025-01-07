import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoSlice'; // Import the default reducer from the slice
import { composeWithDevTools } from 'redux-devtools-extension';


export const store = configureStore({
  reducer: {
    todos: todoReducer, // Assign 'todos' as the key for this slice of state
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
