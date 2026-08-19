import { Outlet } from "react-router-dom";
import { Header } from "./index.js";
import { useState } from "react";
import { Sidebar } from "./index.js";
import { useSelector } from "react-redux";

function App() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  
  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-100">
      <Header />
      <Sidebar />

      {/* Main Content Area */}
      <div
        className={`mt-16 transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-64" : ""
        }`}
      >
        <Outlet />
      </div>

      <div className="h-16"></div>
    </div>
  );
}

export default App;
