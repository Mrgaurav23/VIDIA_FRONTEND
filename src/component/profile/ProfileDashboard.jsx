import React, { useState } from "react";
import {ProfileHeaderCard} from '../../index.js'
import {ProfileNavigation} from '../../index.js'
import {ProfileContentView} from '../../index.js'


function ProfileDashboard({ initialTab = "history" }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  const mockUser = {
    username: "@techinnovator",
    joinDate: "January 2024",
    totalUploads: 14,
    followers: 450,
    avatarUrl: "https://placehold.co/100x100/8b5cf6/ffffff?text=TI",
  };

  return (
    <div>
      <ProfileHeaderCard user = {mockUser}/>
      <ProfileNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-6 bg-gray-800/50 rounded-xl border border-gray-700/30 min-h-[400px]">
            <ProfileContentView activeTab={activeTab} />
        </div>
    </div>
  );
}

export default ProfileDashboard;
