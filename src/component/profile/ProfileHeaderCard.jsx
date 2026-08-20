import React from "react";
import { Edit2 } from "lucide-react";

function ProfileHeaderCard({ user }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700/50 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">

      {/* Avatar */}
      <img
        src={user?.avatar}
        alt={`${user?.username || "User"} avatar`}
        className="w-24 h-24 rounded-full border-4 border-purple-500 object-cover"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://placehold.co/100x100/1f2937/ffffff?text=U";
        }}
      />

      {/* User Information */}
      <div className="flex-grow text-center md:text-left">

        <h2 className="text-xl font-bold text-white">
          {user?.fullName}
        </h2>

        <p className="text-gray-400 mt-1">
          @{user?.username}
        </p>

        <div className="flex items-center justify-center md:justify-start space-x-4 text-gray-400 text-sm mt-3">

          <span>
            {user?.subscribersCount || 0} Subscribers
          </span>

          <span className="hidden sm:inline">•</span>

          <span>
            {user?.channelSubscribedToCount || 0} Subscribed
          </span>

        </div>
      </div>

      {/* Edit Profile */}
      <button className="flex-shrink-0 bg-gray-700 hover:bg-gray-600 text-purple-400 font-semibold py-2 px-5 rounded-full transition duration-200 flex items-center space-x-2">
        <Edit2 className="w-4 h-4" />
        <span>Edit Profile</span>
      </button>
    </div>
  );
}

export default ProfileHeaderCard;