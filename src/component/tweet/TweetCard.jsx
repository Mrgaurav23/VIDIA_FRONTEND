import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EditIcon } from "lucide-react";

import {
  updateTweet as updateTweetApi,
  deleteTweet as deleteTweetApi,
} from "../../api/tweet.api";

import {updateTweet as updateTweetInState, removeTweet } from "../../store/tweetSlice";

import  useMutationn  from "../../hooks/useMutationn";

function TweetCard({ tweet }) {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(tweet.content);

  const user = useSelector((state) => state.auth?.userData);

  const { mutate: updateTweet, loading: updating } =
    useMutationn(updateTweetApi);

  const { mutate: deleteTweet, loading: deleting } =
    useMutationn(deleteTweetApi);

  const isOwner = user?._id === tweet?.owner?._id || user?._id === tweet?.owner;

  const handleUpdate = async () => {
    if (!content.trim()) {
      return;
    }

    try {
      const response = await updateTweet(tweet._id, content.trim());

      //console.log("UPDATE TWEET RESPONSE:", response);

      if (response?.data) {
        dispatch(updateTweetInState(response.data));

        setIsEditing(false);
      }
    } catch (error) {
      console.log("UPDATE TWEET ERROR:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await deleteTweet(tweet._id);

      //console.log("DELETE TWEET RESPONSE:", response);

      if (response?.data) {
        dispatch(removeTweet(tweet._id));
      }
    } catch (error) {
      console.log("DELETE TWEET ERROR:", error);
    }
  };

  return (
    <div className="w-full rounded-xl border p-4">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={tweet?.owner?.avatar}
            alt={tweet?.owner?.username}
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold">{tweet?.owner?.fullName}</h3>

            <p className="text-sm text-gray-500">@{tweet?.owner?.username}</p>
          </div>
        </div>

        {isOwner && (
          <div className="flex gap-2">
            {!isEditing && (
              <button onClick={() => setIsEditing(true)} className="text-sm">
                <EditIcon />
              </button>
            )}

            <button
              onClick={handleDelete}
              disabled={deleting}
              className="text-sm text-red-500"
            >
              {deleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        )}
      </div>

      {/* Content */}

      <div className="mt-4">
        {isEditing ? (
          <div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              maxLength={280}
              className="w-full rounded-lg border p-3"
            />

            <div className="mt-2 flex gap-2">
              <button
                onClick={handleUpdate}
                disabled={updating}
                className="rounded-lg bg-black px-4 py-2 text-white"
              >
                {updating ? "Updating..." : "Update"}
              </button>

              <button
                onClick={() => {
                  setContent(tweet.content);
                  setIsEditing(false);
                }}
                className="rounded-lg border px-4 py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <p className="whitespace-pre-wrap">{tweet?.content}</p>
        )}
      </div>

      {/* Actions

      {!isEditing && (
        <div className="mt-4 flex gap-6 border-t pt-3 text-sm text-gray-600">
          <span>❤️ {tweet?.likesCount || 0}</span>

          <span>💬 {tweet?.commentsCount || 0}</span>
        </div>
      )} */}
    </div>
  );
}

export default TweetCard;
