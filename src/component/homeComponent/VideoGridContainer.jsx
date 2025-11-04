import React, { useState } from "react";
import { useFetch, VideoCard } from "../index";

function VideoGridContainer() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");

  // ✅ Use custom hook for fetching videos
  const {
    data,
    loading,
    error,
    refetch, 
  } = useFetch(
    `/video?page=${page}&limit=10&query=${query}&sortBy=${sortBy}&sortType=desc`
  );

  const videos = data?.videos || [];

  if (loading) return <div className="text-gray-400">Loading videos...</div>;
  if (error) return <div className="text-red-400">{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.length > 0 ? (
        videos.map((video) => <VideoCard key={video._id} video={video} />)
      ) : (
        <p className="text-white col-span-full text-center">Videos not Found</p>
      )}
    </div>
  );
}

export default VideoGridContainer;
