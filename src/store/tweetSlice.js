import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tweets: [],
};

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    setTweets: (state, action) => {
      state.tweets = action.payload;
    },

    addTweet: (state, action) => {
      state.tweets.unshift(action.payload);
    },

    updateTweet: (state, action) => {
      const index = state.tweets.findIndex(
        (tweet) => tweet._id === action.payload._id,
      );

      if (index !== -1) {
        state.tweets[index] = action.payload;
      }
    },

    removeTweet: (state, action) => {
      state.tweets = state.tweets.filter(
        (tweet) => tweet._id !== action.payload,
      );
    },
  },
});

export const { setTweets, addTweet, updateTweet, removeTweet } = tweetSlice.actions;

export default tweetSlice.reducer;
