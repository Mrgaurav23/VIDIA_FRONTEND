import React from "react";
import { useSelector } from "react-redux";
import TweetCard from "./TweetCard";

function TweetList() {
  const tweets = useSelector((state) => state.tweet.tweets);
  //console.log(tweets);

  if (!tweets || tweets.length === 0) {
    return (
      <div className="py-10 text-center text-gray-500">
        No tweets yet.
      </div>
    );
  }

  return (
    <div>
      {tweets.map((tweet) => 
        <TweetCard 
        key={tweet._id} 
        tweet={tweet}
        />
      )}
    </div>
  );
}

export default TweetList;
