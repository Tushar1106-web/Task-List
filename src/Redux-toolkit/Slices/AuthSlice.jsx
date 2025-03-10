import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: Boolean(localStorage.getItem("isAuthenticated")),
  },
  reducers: {
    login: (state,action) => {
      localStorage.setItem("isAuthenticated", action.payload);
      state.isAuthenticated = true;
    },
    logout: (state) => {
      localStorage.removeItem("isAuthenticated");
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions
export default authSlice.reducer
