import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    { task: 'Plätzchen backen', done: false, id: 1 },
    { task: 'Einkaufen gehen', done: false, id: 2 },
    { task: 'Neues Klavierstück üben', done: false, id: 3 },
    { task: 'Geschenke einpacken', done: false, id: 4 },
  ],
  reducers: {
    addTask: (state, action) => {
      const id = Math.max(...state.map((task) => task.id)) + 1;
      state.push({
        task: action.payload,
        done: false,
        id,
      });
    },
    editTask: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, task: action.payload.task }
          : item
      );
    },
    toggleDoneTask: (state, action) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTask, editTask, toggleDoneTask, deleteTask } =
  tasksSlice.actions;
export const selectTasks = (state) => state.tasks;

export default tasksSlice.reducer;
