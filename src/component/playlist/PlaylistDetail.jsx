import { useParams, useNavigate } from "react-router-dom";
import { getPlaylistById } from "../../api/playlist.api";
import useFetchh from "../../hooks/useFetchh.js";

function PlaylistDetail() {
  const { playlistId } = useParams();
  const navigate = useNavigate();

  const {
    data: playlist,
    loading,
    error,
  } = useFetchh(
    () => getPlaylistById(playlistId),
    [playlistId]
  );

  // Loading
  if (loading) {
    return (
      <div className="text-white p-6">
        Loading playlist...
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="text-red-400 p-6">
        {error}
      </div>
    );
  }

  // Playlist not found
  if (!playlist) {
    return (
      <div className="text-gray-400 p-6">
        Playlist not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 text-white">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-gray-400 hover:text-white"
      >
        ← Back to Playlists
      </button>

      {/* Playlist Header */}
      <div className="mb-8">

        {/* Owner */}
        <div className="flex items-center gap-4 mb-5">
          <img
            src={playlist.owner?.avatar}
            alt={playlist.owner?.username || "Owner"}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-white">
              {playlist.owner?.fullName ||
                playlist.owner?.username}
            </h3>

            <p className="text-gray-400">
              @{playlist.owner?.username}
            </p>
          </div>
        </div>

        {/* Playlist Name */}
        <h1 className="text-3xl font-bold">
          {playlist.name}
        </h1>

        {/* Description */}
        {playlist.description && (
          <p className="text-gray-400 mt-2">
            {playlist.description}
          </p>
        )}

        {/* Stats */}
        <div className="flex gap-6 mt-4 text-sm text-gray-500">
          <span>
            {playlist.totalVideos ??
              playlist.videos?.length ??
              0}{" "}
            videos
          </span>

          <span>
            {playlist.totalViews ?? 0} views
          </span>
        </div>
      </div>

      {/* Videos */}
      {playlist.videos?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {playlist.videos.map((video) => (
            <div
              key={video._id}
              onClick={() => navigate(`/watch/${video._id}`)}
              className="rounded-xl overflow-hidden bg-gray-800 hover:bg-gray-700 transition cursor-pointer"
            >

              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full aspect-video object-cover"
              />

              {/* Video Info */}
              <div className="p-4">
                <h2 className="font-semibold line-clamp-2">
                  {video.title}
                </h2>

                <div className="flex gap-3 text-sm text-gray-500 mt-2">
                  <span>
                    {video.views ?? 0} views
                  </span>

                  <span>
                    {video.duration ?? 0}s
                  </span>
                </div>
              </div>

            </div>
          ))}

        </div>
      ) : (
        /* No Videos */
        <div className="text-center py-16 text-gray-500">
          <p className="text-lg">
            No videos in this playlist.
          </p>

          <p className="text-sm mt-2">
            Add some videos to see them here.
          </p>
        </div>
      )}

    </div>
  );
}

export default PlaylistDetail;
