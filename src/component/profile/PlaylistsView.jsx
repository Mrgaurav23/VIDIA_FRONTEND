import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createPlaylist, getUserPlaylists } from "../../api/playlist.api.js";

import { setPlaylists, addPlaylist } from "../../store/playlistSlice.js";

import { useNavigate } from "react-router-dom";

function PlaylistsView({ user }) {
  const dispatch = useDispatch();

  const playlists = useSelector((state) => state.playlist.playlists);

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  //console.log("REDUX PLAYLISTS:", playlists);

  useEffect(() => {
  // console.log("🔥 1. PLAYLIST USEEFFECT RUNNING");
  // console.log("🔥 2. USER:", user);
  // console.log("🔥 3. USER ID:", user?._id);

  const fetchPlaylists = async () => {
    try {
      setError("");

      if (!user?._id) return;

      // console.log("🔥 4. CALLING getUserPlaylists...");

      const response = await getUserPlaylists(user._id);

      // console.log("🔥 5. FULL RESPONSE:", response);
      // console.log("🔥 6. RESPONSE.DATA:", response?.data);

      dispatch(setPlaylists(response?.data || []));
    } catch (error) {
      console.error("❌ FETCH PLAYLIST ERROR:", error);
    }
  };

  fetchPlaylists();
}, [user?._id, dispatch]);

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

      //console.log("CREATE PLAYLIST RESPONSE:", response);
      //console.log("CREATE PLAYLIST DATA:", response.data);

      // Redux mein new playlist add
      dispatch(addPlaylist(response.data));

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

      {/* Create Playlist */}

      <button
        onClick={() => setShowForm(true)}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
      >
        Create New Playlist
      </button>

      {/* Form */}

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
              <div
                key={playlist._id}
                onClick={() => navigate(`/playlist/${playlist._id}`)}
                className="bg-gray-800 rounded-lg p-5 cursor-pointer hover:bg-gray-700 transition"
              >
                <h4 className="text-xl font-semibold text-white">
                  {playlist.name}
                </h4>

                <p className="text-gray-400 mt-2">{playlist.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PlaylistsView;
