import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    deleteToDo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    }
  }
});

export const { deleteToDo } = todoSlice.actions;
export default todoSlice.reducer;
