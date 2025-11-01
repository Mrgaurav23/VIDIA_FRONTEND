import React from 'react'

function PlaylistsView() {
  return (
    <div className="text-gray-300 p-4">
        <h3 className="text-2xl font-semibold mb-4">Your Playlists</h3>
        <p>Manage your custom playlists here.</p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg mt-4">
            Create New Playlist
        </button>
    </div>
  )
}

export default PlaylistsView