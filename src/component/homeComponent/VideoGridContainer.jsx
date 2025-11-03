import React, { useEffect, useState } from "react";
import { api, VideoCard } from "../index";

function VideoGridContainer() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get("/video", {
          params: {
            page: page,
            limit: 10,
            query: query,
            sortBy: sortBy,
            sortType: "desc",
          },
        });

        setVideos(response.data.data.videos);
      } catch (err) {
        setError("Try again later Videos not fetched Successfully");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, [page, query, sortBy]);

  if (loading) return <div>Loading videos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.length > 0 ? (
        videos.map((video) => (
          <VideoCard key={video._id} video={video} />
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
