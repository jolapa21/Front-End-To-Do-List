import { createSlice } from '@reduxjs/toolkit';
import toDo from './toDo';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    toDo: toDo
  }
});

export default todoSlice.reducer;