import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRandomGreeting = createAsyncThunk(
  'greetings/fetchRandomGreeting',
  async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/api/v1/random_greeting');
      const data = await response.json();
      // console.log(data)
      return data.message;
    } catch (error) {
      throw Error('Error fetching greeting');
    }
  }
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greeting: '',
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.greeting = action.payload;
      })
      .addCase(fetchRandomGreeting.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingsSlice.reducer;
