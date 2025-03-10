import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: JSON.parse(localStorage.getItem('tasks')) || [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), title: action.payload, completed: false });
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      task.completed = !task.completed;
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    editTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      task.title = action.payload.title;
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      const newState = state.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addTask, toggleTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
