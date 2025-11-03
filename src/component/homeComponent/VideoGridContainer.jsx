import React, { useEffect, useState } from "react";
import { api, VideoCard } from "../index";

function VideoGridContainer({handleSetRoute}) {
  // const [videos, setVideos] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const [page, setPage] = useState(1);
  // const [query, setQuery] = useState("");
  // const [sortBy, setSortBy] = useState("createdAt");

  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     setLoading(true);
  //     setError(null);

  //     try {
  //       const response = await api.get("/video", {
  //         params: {
  //           page: page,
  //           limit: 10,
  //           query: query,
  //           sortBy: sortBy,
  //           sortType: "desc",
  //         },
  //       });

  //       setVideos(response.data.data.videos);
  //     } catch (err) {
  //       setError("Try again later Videos not fetched Successfully");
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchVideos();
  // }, [page, query, sortBy]);

  // if (loading) return <div>Loading videos...</div>;
  // if (error) return <div>{error}</div>;

  const mockVideos = [
    // videoFileId should correspond to the ID your custom backend uses to serve the file
    { id: 1, title: "Building HyperBlog with React & Appwrite", channel: "Tech Innovator", views: "1.2K", time: "1 hour ago", thumbnailUrl: "https://placehold.co/400x225/3c3c3c/ffffff?text=React+BaaS+Demo", videoFileId: "file_1_tech" },
    { id: 2, title: "Deep Dive into Modern CSS Grid Layouts", channel: "Design Geek", views: "54K", time: "3 days ago", thumbnailUrl: "https://placehold.co/400x225/4a4a4a/ffffff?text=CSS+Grid+Tutorial", videoFileId: "file_2_css" },
];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {mockVideos.length > 0 ? (
        mockVideos.map((video) => (
          <VideoCard key={video.id} video={video} handleSetRoute={handleSetRoute} />
        ))
      ) : (
        <p className="text-white col-span-full text-center">
          Videos not Found
        </p>
      )}
    </div>
  );
}

export default VideoGridContainer;
