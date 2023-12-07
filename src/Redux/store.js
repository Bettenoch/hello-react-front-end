import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetingsSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
    // Add other reducers here if needed
  },
});

export default store;
