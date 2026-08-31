import { X } from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { addVideoToPlaylist } from "../../api/playlist.api.js";
import { useDispatch } from "react-redux";

function AddToPlaylistModal({ videoId, onClose }) {
  const playlists = useSelector((state) => state.playlist.playlists);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddVideo = async (playlistId) => {
    try {
      setLoading(true);
      setMessage("");

      //console.log("🔥 VIDEO ID:", videoId);

      const response = await addVideoToPlaylist(playlistId, videoId);

      //console.log("🔥 ADD VIDEO RESPONSE:", response);

      setMessage("Video added to playlist successfully!");

      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (error) {
      console.error("Video not added:", error);

      setMessage(error?.response?.data?.message || "Failed to add video");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-gray-900 rounded-xl p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold text-white">Add to Playlist</h2>

          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={22} />
          </button>
        </div>

        {/* Playlists */}

        {playlists.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-400">No playlists found.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {playlists.map((playlist) => (
              <button
                key={playlist._id}
                disabled={loading}
                onClick={() => handleAddVideo(playlist._id)}
                className="w-full text-left bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg text-white transition disabled:opacity-50"
              >
                <p className="font-medium">{playlist.name}</p>

                <p className="text-sm text-gray-400 mt-1">
                  {playlist.description}
                </p>
              </button>
            ))}
          </div>
        )}

        {/* Message */}

        {message && (
          <p className="text-green-400 text-sm mt-4 text-center">{message}</p>
        )}
      </div>
    </div>
  );
}

export default AddToPlaylistModal;
