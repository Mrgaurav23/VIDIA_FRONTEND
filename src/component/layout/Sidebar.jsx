import { Compass, Home, User, History } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Sidebar({
  isSidebarOpen,
  activeRoute,
  setActiveRoute,
  toggleSidebar,
}) {
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", icon: Home, route: "/home" },
    { name: "Explore", icon: Compass, route: "/explore" },
    { name: "History", icon: History, route: "/profile/history" },
    { name: "Profile", icon: User, route: "/profile" },
  ];
  return (
    <>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar Content */}
      <nav
        className={`fixed top-0 left-0 h-full bg-gray-900 border-r border-gray-700 text-white z-30 transform transition-transform duration-300 ease-in-out
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
    `}
      >
        <div className="p-4 space-y-2 mt-2">
          {navItems.map((item) => {
            const isActive = activeRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => {
                  setActiveRoute(item.route);
                  navigate(item.route);
                }}
                className={`flex items-center w-full px-4 py-3 rounded-xl transition duration-200
              ${
                isActive
                  ? "bg-purple-700 text-white shadow-lg shadow-purple-500/30"
                  : "text-gray-300 hover:bg-gray-800 hover:text-purple-400"
              }
              `}
              >
                <item.icon className="w-6 h-6 mr-4" />
                <span className="font-medium text-lg">{item.name}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
