import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: []
};

const savedToDoList = JSON.parse(localStorage.getItem('savedToDoList'));
if (savedToDoList && savedToDoList.list.length > 0) {
    initialState.list = savedToDoList.list;
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      let addToList = {...state, list: [...state.list, action.payload]};

      localStorage.setItem('savedToDoList', JSON.stringify(addToList));

      return addToList;
    },
    deleteToDo: (state, action) => {
      let deleteFromList = {...state, list: [...state.list.filter((list) => list.id !== action.payload.id)]};

      localStorage.setItem('savedToDoList', JSON.stringify(deleteFromList));

      if (JSON.parse(localStorage.getItem('savedToDoList')).list.length === 0) {
          localStorage.removeItem('savedToDoList');
      }

      return deleteFromList;
    }
  }
});

export const { addToDo, deleteToDo } = todoSlice.actions;
export default todoSlice.reducer;