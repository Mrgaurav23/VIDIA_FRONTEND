import React from "react";

function PlaylistShow({ playlist }) {
  if (!playlist) return null;

  return (
    <div className="flex gap-4 bg-gray-800 rounded-lg p-3 hover:bg-gray-750">
      {/* Thumbnail */}
      <div className="w-48 h-28 flex-shrink-0 bg-gray-700 rounded-md overflow-hidden">
        {playlist.firstVideoThumbnail ? (
          <img
            src={playlist.firstVideoThumbnail}
            alt={playlist.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No Thumbnail
          </div>
        )}
      </div>

      {/* Playlist Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-lg font-semibold text-white truncate">
          {playlist.name}
        </h4>

        <p className="text-sm text-gray-400 mt-1 line-clamp-2">
          {playlist.description || "No description"}
        </p>

        <div className="flex gap-4 mt-3 text-sm text-gray-500">
          <span>{playlist.totalVideos || 0} videos</span>

          <span>{playlist.totalViews || 0} views</span>
        </div>
      </div>

      {/* View Button */}
      <div className="flex items-center">
        <button
          type="button"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm"
        >
          View
        </button>
      </div>
    </div>
  );
}

export default PlaylistShow;