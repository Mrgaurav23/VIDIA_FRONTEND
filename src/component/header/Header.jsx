import React from "react";
import { Menu, Search, Upload, Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Header({ toggleSidebar }) {
  const navigate = useNavigate()
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-gray-900 border-b border-gray-700 h-16 flex items-center justify-between px-4 lg:px-8 shadow-xl">
      {/* Left Section: Logo and Mobile Menu */}
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full text-purple-400 hover:bg-gray-800 transition duration-150 lg:hidden"
          aria-label="Toggle Sidebar"
        >
          <Menu className="w-6 h-6" />
          {/* <Logo /> */}
        </button>
      </div>

      {/* Center Section: Search Bar (Hidden on very small screens) */}
      <div className="hidden md:flex flex-grow max-w-xl mx-8">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Search videos, channels, and more..."
            className="w-full px-4 py-2 text-sm bg-gray-800 text-gray-200 border border-gray-700 rounded-l-full focus:outline-none focus:border-purple-500 transition duration-150"
          />
          <button className="px-4 bg-gray-700 hover:bg-purple-600 transition duration-200 rounded-r-full border border-gray-700 border-l-0 text-gray-300 hover:text-white">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right Section: Actions and Profile */}
      <div className="flex items-center space-x-3">
        <button className='p-2 rounded-full text-gray-300 hover:bg-gray-800 hover:text-purple-400 transition duration-150" aria-label="Upload Video'>
          <Upload className="w-6 h-6" />
        </button>
        <button
          className="p-2 rounded-full text-gray-300 hover:bg-gray-800 hover:text-purple-400 transition duration-150"
          aria-label="Notifications"
        >
          <Bell className="w-6 h-6" />
        </button>
        <div
          onClick={() => navigate("/profile")}
          className="p-1 rounded-full hover:bg-purple-800 transition duration-150"
          aria-label="User Profile"
        >
          <User className="w-7 h-7 text-purple-400 border border-purple-400 rounded-full p-0.5"  />
        </div>
      </div>
    </header>
  );
}

export default Header;
