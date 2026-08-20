import React, { useState } from "react";
import {ProfileHeaderCard} from '../../index.js'
import {ProfileNavigation} from '../../index.js'
import {ProfileContentView} from '../../index.js'
import userChannelProfile from "../../hooks/userChannelProfile.js";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


function ProfileDashboard({ initialTab = "history"}) {

  // Redux se logged-in user
  const userData = useSelector(
    (state) => state.auth.userData
  );

  // username redux se
  const username = userData?.username;

  console.log("Logged in user:", userData);
  console.log("Username:", username);

  console.log("Redux userData:", userData);
  console.log("Profile username:", username);

  const [activeTab, setActiveTab] = useState(initialTab);
  console.log("Profile username:", username);
  const {user,loading,error} = userChannelProfile(username)

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>Profile not found</div>;
  }

  const mockUser = {
    username: "@techinnovator",
    joinDate: "January 2024",
    totalUploads: 14,
    followers: 450,
    avatarUrl: "https://placehold.co/100x100/8b5cf6/ffffff?text=TI",
  };

  return (
    <div>
      <ProfileHeaderCard user = {user}/>
      <ProfileNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-6 bg-gray-800/50 rounded-xl border border-gray-700/30 min-h-[400px]">
            <ProfileContentView activeTab={activeTab} />
        </div>
    </div>
  );
}

export default ProfileDashboard;
