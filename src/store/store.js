import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import sidebarReducer from './sidebarSlice'
import playlistReducer from './playlistSlice'

const store = configureStore({
    reducer : {
        auth : authReducer,
        sidebar : sidebarReducer,
        playlist : playlistReducer
    }
});

export default store