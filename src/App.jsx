import { Outlet } from "react-router-dom";
import { Header } from "./component/index";
import { useState } from "react";
import { Sidebar } from "./component/index";
import { VideoCard } from "./component/index";

// const mockVideos = [
//   {
//     id: 1,
//     title: "Building HyperBlog with React & Appwrite",
//     channel: "Tech Innovator",
//     views: "1.2K",
//     time: "1 hour ago",
//     thumbnailUrl:
//       "https://placehold.co/400x225/3c3c3c/ffffff?text=React+BaaS+Demo",
//   },
//   {
//     id: 2,
//     title: "Deep Dive into Modern CSS Grid Layouts",
//     channel: "Design Geek",
//     views: "54K",
//     time: "3 days ago",
//     thumbnailUrl:
//       "https://placehold.co/400x225/4a4a4a/ffffff?text=CSS+Grid+Tutorial",
//   },
//   {
//     id: 3,
//     title: "Tailwind CSS for Rapid Prototyping",
//     channel: "Frontend Fastlane",
//     views: "1.1M",
//     time: "2 weeks ago",
//     thumbnailUrl:
//       "https://placehold.co/400x225/252525/ffffff?text=Tailwind+Tips",
//   },
//   {
//     id: 4,
//     title: "The Future of Serverless Computing",
//     channel: "Cloud Guru",
//     views: "32K",
//     time: "1 day ago",
//     thumbnailUrl:
//       "https://placehold.co/400x225/3c3c3c/ffffff?text=Serverless+Trends",
//   },
//   {
//     id: 5,
//     title: "Best Practices for React Hooks",
//     channel: "Code Master",
//     views: "450K",
//     time: "1 month ago",
//     thumbnailUrl:
//       "https://placehold.co/400x225/4a4a4a/ffffff?text=React+Hooks+Guide",
//   },
//   {
//     id: 6,
//     title: "Intro to Advanced Data Structures",
//     channel: "Algorithm Academy",
//     views: "98K",
//     time: "6 days ago",
//     thumbnailUrl:
//       "https://placehold.co/400x225/252525/ffffff?text=Algorithms+101",
//   },
//   // Add more videos for a fuller grid effect
//   {
//     id: 7,
//     title: "Astro vs Next.js Comparison",
//     channel: "Web Stack",
//     views: "20K",
//     time: "1 week ago",
//     thumbnailUrl:
//       "https://placehold.co/400x225/3c3c3c/ffffff?text=Web+Frameworks",
//   },
//   {
//     id: 8,
//     title: "10 Tips for Better UX Design",
//     channel: "Design Lab",
//     views: "65K",
//     time: "5 days ago",
//     thumbnailUrl:
//       "https://placehold.co/400x225/4a4a4a/ffffff?text=UX+Design+Secrets",
//   },
// ];

function App() {
  // State for managing sidebar visibility on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState("home");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-100">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        activeRoute={activeRoute}
        setActiveRoute={setActiveRoute}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content Area */}
      <div className={`mt-16 transition-all duration-300 `}>
        <Outlet />
      </div>

      {/* <main className="pt-16 lg:pl-64 p-4 min-h-screen">
        <div className="p-6 bg-gray-800 rounded-xl mb-6 shadow-inner border border-gray-700/50">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Home</h1>
          <p className="text-gray-400">
            Explore the latest trending content from around the web.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {mockVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

      
        <div className="h-16"></div>
      </main> */}

      <div className="h-16"></div>
    </div>
  );
}

export default App;
