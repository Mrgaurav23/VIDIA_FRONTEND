import { useState } from "react";
import { useSelector } from "react-redux";
import { addVideoToPlaylist } from "../../api/playlist.api";

function AddToPlaylist({ videoId }) {
  const [showPlaylists, setShowPlaylists] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const playlists = useSelector((state) => state.playlist.playlists);

  const handleAddVideo = async (playlistId) => {
    try {
      setLoading(true);
      setMessage("");

      await addVideoToPlaylist(playlistId, videoId);

      setMessage("Video added to playlist successfully");

      setShowPlaylists(false);
    } catch (error) {
      console.error("Video not added:", error);

      setMessage(error?.response?.data?.message || "Failed to add video");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowPlaylists(!showPlaylists)}
        className="bg-purple-600 px-4 py-2 rounded-lg text-white"
      >
        Add to Playlist
      </button>

      {showPlaylists && (
        <div className="absolute z-50 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl p-3">
          <h3 className="text-white font-semibold mb-3">Add to Playlist</h3>

          {playlists.length === 0 ? (
            <p className="text-gray-400 text-sm">No playlists found</p>
          ) : (
            <div className="space-y-2">
              {playlists.map((playlist) => (
                <button
                  key={playlist._id}
                  disabled={loading}
                  onClick={() => handleAddVideo(playlist._id)}
                  className="w-full text-left px-3 py-2 rounded hover:bg-gray-700 text-gray-200"
                >
                  {playlist.name}
                </button>
              ))}
            </div>
          )}

          {message && <p className="text-sm text-green-400 mt-3">{message}</p>}
        </div>
      )}
    </div>
  );
}

export default AddToPlaylist;
