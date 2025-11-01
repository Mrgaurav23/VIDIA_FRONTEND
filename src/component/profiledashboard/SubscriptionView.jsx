import React from "react";

function SubscriptionView() {
  const mockSubscriptions = [
    {
      id: 1,
      name: "Design Geek",
      avatar: "https://placehold.co/80x80/4a4a4a/ffffff?text=DG",
    },
    {
      id: 2,
      name: "Frontend Fastlane",
      avatar: "https://placehold.co/80x80/252525/ffffff?text=FF",
    },
    {
      id: 3,
      name: "Cloud Guru",
      avatar: "https://placehold.co/80x80/3c3c3c/ffffff?text=CG",
    },
  ];
  return (
    <div className="text-gray-300 p-4">
      <h3 className="text-2xl font-semibold mb-4">Your Subscriptions</h3>
      <p>Channels you follow.</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
        {mockSubscriptions.map((sub) => (
          <div
            key={sub.id}
            className="flex flex-col items-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition"
          >
            <img
              src={sub.avatar}
              alt={sub.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <p className="text-white font-medium mt-3 text-center">
              {sub.name}
            </p>
            <button className="mt-2 text-xs bg-gray-600 text-gray-200 px-3 py-1 rounded-full hover:bg-red-600 hover:text-white">
              Unsubscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubscriptionView;
