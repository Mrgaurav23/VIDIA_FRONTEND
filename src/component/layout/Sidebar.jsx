import { Compass, Home, User, History } from "lucide-react";
import { BsTwitter } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, setActiveRoute } from "../../store/sidebarSlice";

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSidebarOpen, activeRoute } = useSelector((state) => state.sidebar);

  const navItems = [
    { name: "Home", icon: Home, route: "/home" },
    { name: "Twitter", icon: BsTwitter, route: "/twitter" },
    { name: "History", icon: History, route: "/profile/history" },
    { name: "Profile", icon: User, route: "/profile" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => dispatch(toggleSidebar)}
        ></div>
      )}

      {/* Sidebar Content */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 pt-16 bg-gray-900 border-r border-gray-700 text-white z-30 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 space-y-2 mt-2">
          {navItems.map((item) => {
            const isActive = activeRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => {
                  dispatch(setActiveRoute(item.route)); // Redux state update
                  navigate(item.route);

                  // Optional: Mobile view me click ke baad sidebar band karne ke liye
                  dispatch(toggleSidebar())
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
