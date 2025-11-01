import React from "react";
import { History, ListVideo, Heart, Users, Settings } from "lucide-react";

function ProfileNavigation({ activeTab, setActiveTab }) {
  const navItems = [
    { name: "History", icon: History, tab: "history" },
    { name: "Playlists", icon: ListVideo, tab: "playlists" },
    { name: "Liked Videos", icon: Heart, tab: "liked" },
    { name: "Subscriptions", icon: Users, tab: "subscriptions" },
    { name: "Settings", icon: Settings, tab: "settings" },
  ];
  return (
    <div className="flex flex-wrap items-center gap-2 p-2 bg-gray-800 rounded-xl border border-gray-700/50 mt-6">
      {navItems.map((item) => {
        const isActive = activeTab == item.tab;
        return (
          <button
            key={item.tab}
            onClick={() => setActiveTab(item.tab)}
            className={`flex-grow flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition duration-200 text-sm font-medium
                    ${
                      isActive
                        ? "bg-purple-700 text-white shadow-lg shadow-purple-500/30"
                        : "text-gray-400 hover:bg-gray-700/50 hover:text-purple-300"
                    }
                    `}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </button>
        );
      })}
    </div>
  );
}

export default ProfileNavigation;
