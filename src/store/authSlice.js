import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("userData");

const initialState = {
  //status : false
  //userData : null
  status: !!savedUser,
  userData: savedUser ? JSON.parse(savedUser) : null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;

      localStorage.setItem("userData", JSON.stringify(action.payload));
    },

    logout: (state) => {
      state.status = false;
      state.userData = null;

      localStorage.removeItem("userData");
      localStorage.removeItem("accessToken");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
