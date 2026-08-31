import React, { useState, useEffect } from "react";
import { getWatchHistory } from "../../api/auth.api";

function HistoryView() {
  const [watchHistory, setWatchHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWatchHistory = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getWatchHistory();

      //console.log("API RESPONSE:", response);
      //console.log("HISTORY DATA:", response?.data);
      setWatchHistory(response?.data || []);
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          "Failed to fetch watch history"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWatchHistory();
  }, []);

  // Loading
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-400">
          Loading watch history...
        </p>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center py-20">
        <p className="text-red-500 mb-4">{error}</p>

        <button
          onClick={fetchWatchHistory}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Empty history
  if (watchHistory.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center py-20 text-center">
        <h2 className="text-xl font-semibold text-white">
          No watch history
        </h2>

        <p className="text-gray-500 mt-2">
          Videos you watch will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="text-gray-300 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold text-white">
          Watch History
        </h3>

        <span className="text-sm text-gray-500">
          {watchHistory.length} videos
        </span>
      </div>

      {/* History List */}
      <div className="space-y-4">
        {watchHistory.map((video) => (
          <div
            key={video._id}
            className="flex flex-col sm:flex-row items-start sm:items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition"
          >
            {/* Thumbnail */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full sm:w-40 aspect-video rounded object-cover flex-shrink-0"
            />

            {/* Video Details */}
            <div className="ml-0 sm:ml-4 mt-3 sm:mt-0 flex-1 min-w-0">
              {/* Title */}
              <p className="text-base font-medium text-white line-clamp-2">
                {video.title}
              </p>

              {/* Owner */}
              <div className="flex items-center gap-2 mt-2">
                {video.owner?.avatar && (
                  <img
                    src={video.owner.avatar}
                    alt={video.owner.username}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                )}

                <div>
                  <p className="text-sm text-gray-300">
                    {video.owner?.fullName}
                  </p>

                  <p className="text-xs text-gray-500">
                    @{video.owner?.username}
                  </p>
                </div>
              </div>

              {/* Views */}
              <p className="text-xs text-gray-500 mt-2">
                {video.views || 0} views
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryView;