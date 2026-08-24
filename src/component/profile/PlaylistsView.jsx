import React, { useEffect, useState } from "react";
import { createPlaylist, getUserPlaylists } from "../../api/playlist.api.js";
import PlaylistShow from "../playlist/PlaylistShow.jsx";

function PlaylistsView({ user }) {
  const [showForm, setShowForm] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPlaylists = async () => {
    try {
      setError("");

      const response = await getUserPlaylists(user._id);

      console.log("Fetched playlists:", response);

      setPlaylists(response.data || []);
    } catch (error) {
      console.log("Playlists not fetched:", error);
      setError(error?.response?.data?.message || "Failed to fetch playlists");
    }
  };

  useEffect(() => {
    if (user?._id) {
      fetchPlaylists();
    }
  }, [user?._id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !description.trim()) {
      setError("Playlist name and description are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const playlistData = {
        name: name.trim(),
        description: description.trim(),
      };

      const response = await createPlaylist(playlistData);

      console.log("Playlist created:", response);

      // Newly created playlist immediately UI me add
      setPlaylists((prev) => [...prev, response.data]);

      setName("");
      setDescription("");
      setShowForm(false);
    } catch (error) {
      console.log("Playlist not created:", error);

      setError(error?.response?.data?.message || "Failed to create playlist");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-gray-300 p-4">
      <h3 className="text-2xl font-semibold mb-4">Your Playlists</h3>

      <p>Manage your custom playlists here.</p>

      <button
        onClick={() => setShowForm(true)}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
      >
        Create New Playlist
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-6 max-w-md space-y-4">
          <input
            type="text"
            placeholder="Playlist name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
          />

          <textarea
            placeholder="Playlist description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
          />

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Playlist"}
            </button>

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
          </div>

          {error && <p className="text-red-400">{error}</p>}
        </form>
      )}

      {/* Playlists */}
      <div className="mt-8">
        {playlists.length === 0 ? (
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <p className="text-gray-400">No playlists found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {playlists.map((playlist) => (
              <PlaylistShow key={playlist._id} playlist={playlist} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PlaylistsView;
