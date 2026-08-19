import React from "react";
import { Edit2 } from "lucide-react";

function ProfileHeaderCard({ user }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700/50 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
      <img src={user.avatarUrl} 
      alt="user Avatar"
      className="w-24 h-24 rounded-full border-4 border-purple-500"
      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/1f2937/ffffff?text=U" }}
      />
      <div className="flex-grow text-center md:text-left">
        <h2 className="flex-grow text-center md:text-left">{user.username}</h2>
        <div className="flex items-center justify-center md:justify-start space-x-4 text-gray-400 text-sm mt-2">
            <span>Member since {user.joinDate}</span>
            <span className="hidden sm:inline">•</span>
            <span>{user.totalUploads} Uploads</span>
            <span className="hidden sm:inline">•</span>
            <span>{user.followers} Followers</span>
        </div>
      </div>
      <button className="flex-shrink-0 bg-gray-700 hover:bg-gray-600 text-purple-400 font-semibold py-2 px-5 rounded-full transition duration-200 flex items-center space-x-2">
        <Edit2 className="w-4 h-4" />
        <span>Edit Profile</span>
      </button>
    </div>
  );
}

export default ProfileHeaderCard;
