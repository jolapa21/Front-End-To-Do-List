import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      return [...state, {id: action.payload.id, name: action.payload.name}];
    }
  }
});

export const { addToDo } = todoSlice.actions;
export default todoSlice.reducer;
