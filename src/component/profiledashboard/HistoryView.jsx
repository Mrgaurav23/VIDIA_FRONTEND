import React from "react";

function HistoryView() {
  const mockVideos = [
    {
      id: 1,
      title: "Building HyperBlog with React & Appwrite",
      channel: "Tech Innovator",
      views: "1.2K",
      time: "1 hour ago",
      thumbnailUrl:
        "https://placehold.co/400x225/3c3c3c/ffffff?text=React+BaaS+Demo",
    },
    {
      id: 2,
      title: "Deep Dive into Modern CSS Grid Layouts",
      channel: "Design Geek",
      views: "54K",
      time: "3 days ago",
      thumbnailUrl:
        "https://placehold.co/400x225/4a4a4a/ffffff?text=CSS+Grid+Tutorial",
    },
  ];
  return (
    <div className="text-gray-300 p-4">
      <h3 className="text-2xl font-semibold mb-4">Watch History</h3>
      <p>Your watch history, powered by Appwrite data.</p>
      <div className="mt-4 space-y-4">
        {mockVideos.slice(0,3).map(video => (
            <div key={video.id} className="flex flex-col sm:flex-row items-start sm:items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition">
                <img src={video.thumbnailUrl} alt={video.title} className="w-full sm:w-32 aspect-video rounded object-cover flex-shrink-0" />
                <div className="ml-0 sm:ml-4 mt-3 sm:mt-0">
                    <p className="text-base font-medium text-white line-clamp-1">{video.title}</p>
                    <p className="text-sm text-gray-400">{video.channel}</p>
                    <p className="text-xs text-gray-500 mt-1">Watched: 2 days ago</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryView;
