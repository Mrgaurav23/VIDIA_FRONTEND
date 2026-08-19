import React from "react";
import { Eye, Clock } from "lucide-react";
import {
  formatViews,
  formatDuration,
  formatTimeAgo,
} from "../../utils/DataFormator.js";
import { useNavigate } from "react-router-dom";

const FALLBACK_IMAGE_URL =
  "https://via.placeholder.com/320x180?text=No+Thumbnail";

function VideoCard({ video = {}, }) {
  const navigate = useNavigate()
  if (!video) {  
    return null;
  }

  const formattedViews = formatViews(video.views || 0);
  const formattedDuration = formatDuration(video.duration || 0);
  const timeAgo = formatTimeAgo(video.createdAt);

  // const channelName = video.owner.username;

  const handleCardClick = () => {
    // Router-style navigation using a function signature compatible with App's navigate
    navigate(`/watch/${video._id}`);
  };

  return (
    <div 
    onClick={handleCardClick}
    className="flex flex-col space-y-2 cursor-pointer transition duration-300 ease-in-out transform hover:shadow-2xl hover:shadow-purple-700/50 rounded-xl overflow-hidden bg-gray-800">
      {/* thumbnail */}
      <div className="aspect-video relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = FALLBACK_IMAGE_URL;
          }}
        />

        {/* Dynamic Duration Overlay */}
        {video.duration && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-xs text-white px-2 py-0.5 rounded">
            {formattedDuration}
          </div>
        )}
      </div>

      {/* video Info */}
      <div>
        <p
          className="text-gray-50 text-base font-semibold line-clamp-2"
          title={video.title}
        >
          {video.title}
        </p>

        {/* <p className="text-gray-400 text-sm mt-1">{channelName}</p> */}

        <div className="flex items-center text-gray-500 text-xs mt-0.5">
          {/* views */}
          <Eye className="w-3 h-3 mr-1" />
          <span>{formattedViews} views</span>
          <span className="mx-1">•</span>

          {/* Upload Time */}
          <Clock className="w-3 h-3 mr-1" />
          <span>{timeAgo}</span>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
