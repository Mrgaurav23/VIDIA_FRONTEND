import React from "react";
import { Eye, Clock } from "lucide-react";

function VideoCard({ video }) {
  return (
    <div className="flex flex-col space-y-2 cursor-pointer transition duration-300 ease-in-out transform hover:shadow-2xl hover:shadow-purple-700/50 rounded-xl overflow-hidden bg-gray-800">
      {/* thumbnail */}
      <div className="aspect-video relative">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onError = null;
            e.target.src = "image_url";
          }} //
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-xs text-white px-2 py-0.5 rounded">
          12:30
        </div>
      </div>

      {/* video Info */}
      <div className="py-3">
        <p
          className="text-gray-50 text-base font-semibold line-clamp-2"
          title={video.title}
        >
          {video.title}
        </p>
        <p className="text-gray-400 text-sm mt-1">{video.channel}</p>
        <div className="flex items-center text-gray-500 text-xs mt-0.5">
          <Eye className="w-3 h-3 mr-1" />
          <span>{video.views}</span>
          <span className="mx-1">•</span>
          <Clock className="w-3 h-3 mr-1" />
          <span>{video.time}</span>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
