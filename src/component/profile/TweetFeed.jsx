import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

import TweetCreate from "../tweet/TweetCreate";
import TweetList from "../tweet/TweetList";

import { getUserTweet } from "../../api/tweet.api";
import { setTweets } from "../../store/tweetSlice.js";

import useFetchh from "../../hooks/useFetchh";

function TweetFeed() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.userData);

  const { data, loading, error } = useFetchh(
    () => getUserTweet(user._id),
    [user?._id],
  );

  useEffect(() => {
    if (data?.data) {
      console.log("USER TWEETS:", data.data);

      dispatch(setTweets(data.data));
    }
  }, [data, dispatch]);
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-5">
      <TweetCreate />

      {loading && <p className="text-center">Loading tweets...</p>}

      {error && (
        <p className="text-center text-red-500">Unable to load tweets</p>
      )}

      {!loading && !error && <TweetList />}
    </div>
  );
}

export default TweetFeed;
