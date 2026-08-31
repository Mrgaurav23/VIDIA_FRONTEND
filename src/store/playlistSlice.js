import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlists: [],
};

const playlistSlice = createSlice({
  name: "playlist",

  initialState,

  reducers: {
    setPlaylists: (state, action) => {
      state.playlists = action.payload;
    },

    addPlaylist: (state, action) => {
      state.playlists.push(action.payload);
    },

    updatePlaylist: (state, action) => {
      const index = state.playlists.findIndex(
        (playlist) => playlist._id === action.payload._id,
      );

      if (index !== -1) {
        state.playlists[index] = action.payload;
      }
    },

    removePlaylist: (state, action) => {
      state.playlists = state.playlists.filter(
        (playlist) => playlist._id !== action.payload,
      );
    },

    clearPlaylists: (state) => {
      state.playlists = [];
    },
  },
});

export const { setPlaylists, addPlaylist, removePlaylist, clearPlaylists } =
  playlistSlice.actions;

export default playlistSlice.reducer;
