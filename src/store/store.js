import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import sidebarReducer from './sidebarSlice'
import playlistReducer from './playlistSlice'
import tweetReducer from './tweetSlice'

const store = configureStore({
    reducer : {
        auth : authReducer,
        sidebar : sidebarReducer,
        playlist : playlistReducer,
        tweet : tweetReducer
    }
});

export default store