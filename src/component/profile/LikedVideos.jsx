import React from 'react'
import VideoCard from '../video/VideoCard.jsx';

function LikedVideos() {
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
    <h3 className="text-2xl font-semibold mb-4">Liked Videos</h3>
    <p>Videos you have liked across the platform.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
      {mockVideos.slice(2,6).map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
    </div>
  )
}

export default LikedVideos