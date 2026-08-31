import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTweet } from "../../api/tweet.api";
import { addTweet } from "../../store/tweetSlice";
import useMutationn from "../../hooks/useMutationn";

function TweetCreate() {
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const { mutate, loading, error } = useMutationn(createTweet);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content.trim()) return;

    try {
      const response = await mutate(content);

      console.log("CREATE TWEET RESPONSE:", response);

      dispatch(addTweet(response.data));

      setContent("");
    } catch (error) {
      console.log("Tweet creation failed:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full
        bg-[#101828]
        border-b border-gray-700/70
        px-4 py-4
        transition-all
      "
    >
      {/* Tweet input */}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening?"
        rows={3}
        className="
          w-full
          resize-none
          bg-transparent
          text-gray-100
          text-[17px]
          placeholder:text-gray-500
          outline-none
          border-none
          leading-6
        "
      />

      {/* Bottom section */}
      <div className="flex items-center justify-between mt-3">

        {/* Character count */}
        <span
          className={`
            text-xs
            ${
              content.length > 280
                ? "text-red-400"
                : "text-gray-500"
            }
          `}
        >
          {content.length}/280
        </span>

        {/* Post button */}
        <button
          type="submit"
          disabled={loading || !content.trim() || content.length > 280}
          className="
            rounded-full
            bg-purple-500
            px-6 py-2
            text-sm
            font-semibold
            text-white
            shadow-lg
            shadow-purple-500/20
            transition-all
            duration-200
            hover:bg-purple-600
            hover:shadow-purple-500/30
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-40
            disabled:hover:bg-purple-500
          "
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </div>

      {/* Error */}
      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error.message}
        </p>
      )}
    </form>
  );
}

export default TweetCreate;