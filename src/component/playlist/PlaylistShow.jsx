import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PlaylistShow() {
  const navigate = useNavigate();

  const playlists = useSelector((state) => state.playlist.playlists);

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">My Playlists</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {playlists.map((playlist) => (
          <div
            key={playlist._id}
            onClick={() => navigate(`/playlist/${playlist._id}`)}
            className="cursor-pointer rounded-lg border p-4 hover:bg-gray-100"
          >
            <h2 className="text-lg font-semibold">{playlist.name}</h2>

            <p className="text-sm text-gray-500">
              {playlist.videos?.length || 0} videos
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaylistShow;
