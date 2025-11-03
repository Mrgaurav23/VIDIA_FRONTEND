import { ThumbsDown, ThumbsUp, Send, User, ChevronDown } from "lucide-react";
import React from "react";
import { useNavigate,useParams } from "react-router-dom";

const mockVideos = [
  {
    id: 1,
    title: "Building HyperBlog with React & Custom Backend",
    channel: "Tech Innovator",
    views: "1.2K",
    time: "1 hour ago",
    thumbnailUrl:
      "https://placehold.co/400x225/3c3c3c/ffffff?text=React+Backend+Demo",
    videoId: "b80e46c7-313b-4874-9b59-4d82f7c02b5e",
  },
  {
    id: 2,
    title: "Deep Dive into Modern Tailwind CSS Layouts",
    channel: "Design Geek",
    views: "54K",
    time: "3 days ago",
    thumbnailUrl:
      "https://placehold.co/400x225/4a4a4a/ffffff?text=Tailwind+Grid+Tutorial",
    videoId: "9d90f91a-7b3b-4a5d-b080-6060c5f2129e",
  },
];

// Function to get streaming URL from custom backend
const getStreamingUrl = (videoId) => {
  // यहाँ आपको अपने कस्टम बैकएंड को कॉल करने का लॉजिक डालना होगा।
  // उदाहरण के लिए: return `https://api.yourbackend.com/stream/${videoId}`;
  console.log(`Fetching stream for video ID: ${videoId}`);
  return "https://videos.pexels.com/video-files/5045479/5045479-hd_1920_1080_30fps.mp4"; // Dummy video URL
};

function VideoPlayerPage() {
  const { videoId } = useParams();
  const navigate = useNavigate();

  const video = mockVideos.find((v) => v.videoId === videoId) || mockVideos[0];
  const streamUrl = getStreamingUrl(video.videoId);

  // Filter suggested videos (exclude the current one)
  const suggestedVideos = mockVideos.filter((v) => v.videoId !== videoId);
  return (
    <main className="p-4 min-h-screen">
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        {/* Left Column: Player & Details (70% on large screens) */}
        <div className="flex-1 lg:w-2/3">
          {/* VideoPlayer  */}
          <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl mb-4 border border-gray-700">
            {streamUrl ? (
              <video
                src={streamUrl}
                controls
                autoPlay
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="flex items-center justify-center h-full text-lg text-red-400">
                Try Again Later Video Is Not Loaded Successfully
              </div>
            )}
          </div>

          {/* Video Title & Channel Info */}
          <h1 className="text-2xl font-bold text-white mb-3">{video.title}</h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-800 pb-4 mb-4">
            <div className="flex items-center space-x-3 mb-3 sm:mb-0">
              <User className="w-10 h-10 rounded-full text-purple-400 bg-gray-700 p-1 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold">{video.channel}</p>
                <p className="text-gray-400 text-sm">1.5M Subscribers</p>
              </div>
              <button className="ml-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-full transition">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-3">
              {/* Like/Dislike Button Group */}
              <div className="flex bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                <button className="px-3 py-2 flex items-center text-gray-300 hover:bg-gray-700 transition">
                  <ThumbsUp className="w-5 h-5 mr-1 text-purple-400" />
                  {video.views}
                </button>
                <div className="w-px bg-gray-700"></div>
                <button className="px-3 py-2 flex items-center text-gray-300 hover:bg-gray-700 transition">
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              {/* Share Button */}
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-medium rounded-full transition border border-gray-700">
                <ThumbsDown className="w-5 h-5 mr-2 inline" /> Dislike
              </button>
            </div>
          </div>
          {/* Description Box */}
          <div className="bg-gray-800 p-4 rounded-xl text-gray-300 text-sm border border-gray-700">
            <p className="text-gray-400 font-semibold">
              {video.views} views • {video.time}
            </p>
            <p className="mt-2 line-clamp-3">
              यह वीडियो इस विषय पर एक गहन ट्यूटोरियल है। हमने इसे अपने कस्टम
              बैकएंड के साथ रिएक्ट में बनाया है ताकि प्रदर्शन और स्केलेबिलिटी
              सुनिश्चित हो सके। अधिक जानने के लिए सब्सक्राइब करें!
            </p>
            <button className="text-purple-400 mt-1 hover:text-purple-300 font-medium">
              Show more
            </button>
          </div>

          {/* Comment Section */}
          <div className="mt-6">
            <h2 className="text-xl font-bold text-white mb-4">
              Comments (12K)
            </h2>

            {/* Comment Input */}
            <div className="flex items-start space-x-3 mb-6">
              <User className="w-8 h-8 rounded-full text-gray-400 bg-gray-700 p-1 flex-shrink-0" />
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full py-2 px-3 bg-gray-800 border-b border-gray-700 focus:outline-none focus:border-purple-500 text-gray-200 text-sm rounded-md"
                />
                <button className="mt-2 ml-auto block px-4 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-full transition">
                  <Send className="w-4 h-4 inline mr-1" /> Comment
                </button>
              </div>

              {/* Mock Comments */}
              {/* <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <User className="w-8 h-8 rounded-full text-gray-400 bg-gray-700 p-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Commenter {i}{" "}
                        <span className="text-gray-500 font-normal ml-2 text-xs">
                          2 days ago
                        </span>
                      </p>
                      <p className="text-gray-300 text-sm mt-0.5">
                        यह ट्यूटोरियल बहुत उपयोगी था! धन्यवाद!
                      </p>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
        {/* Right Column: Suggested Videos (30% on large screens) */}
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-2">
            Suggested Videos
          </h2>
          <div className="space-y-4">
            {suggestedVideos.map((sVideo) => (
              <div
                key={sVideo.id}
                onClick={() => navigate(`/watch/${sVideo.videoId}`)}
                className="flex space-x-3 cursor-pointer hover:bg-gray-800 p-2 rounded-lg transition"
              >
                <div className="aspect-video w-32 flex-shrink-0 rounded-lg overflow-hidden relative">
                  <img
                    src={sVideo.thumbnailUrl}
                    alt={sVideo.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/128x72/1f2937/ffffff?text=Video";
                    }}
                  />
                  <span className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
                    08:08
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-100 line-clamp-2">
                    {sVideo.title}
                  </h4>
                  <p className="text-gray-400 text-xs mt-1">{sVideo.channel}</p>
                  <p className="text-gray-500 text-xs">{sVideo.views}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default VideoPlayerPage;
