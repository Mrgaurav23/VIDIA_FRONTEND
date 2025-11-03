import { Outlet } from "react-router-dom";
import { Header } from "./component/index";
import { useState } from "react";
import { Sidebar } from "./component/index";

import { ProfileDashboard } from "./component/index";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState('home');

  
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

      <div className="h-16"></div>
    </div>
  );
}

export default App;
