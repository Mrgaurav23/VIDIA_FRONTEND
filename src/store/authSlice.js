import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false, // user logged in hai ya nahi
    userData : null, // User ki details (name, email, avatar etc.)
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        // Jab user login karega tab ye call hoga
        login : (state,action) => {
            state.status = true,
            state.userData = action.payload
        },

        logout : (state) => {
            state.status = false,
            state.userData = null
        }
    }
});

// Actions ko export karo taaki components me use kar sako
export const {login,logout} = authSlice.actions

// Reducer ko export karo store me daalne ke liye
export default authSlice.reducer;