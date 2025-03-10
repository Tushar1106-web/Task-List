import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/AuthSlice";
import taskReducer from "./Slices/taskSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    tasks: taskReducer,
  },
});

export default store;
