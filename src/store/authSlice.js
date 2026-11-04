
import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("userData");

const initialState = {
  status: false,
  userData: savedUser ? JSON.parse(savedUser) : null,
  authChecked: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
      state.authChecked = true;

      localStorage.setItem(
        "userData",
        JSON.stringify(action.payload)
      );
    },

    logout: (state) => {
      state.status = false;
      state.userData = null;
      state.authChecked = true;

      localStorage.removeItem("userData");
      localStorage.removeItem("accessToken");
    },

    setAuthChecked: (state) => {
      state.authChecked = true;
    },
  },
});

export const { login, logout, setAuthChecked } =
  authSlice.actions;

export default authSlice.reducer;
