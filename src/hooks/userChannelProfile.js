import { useState, useEffect } from "react";
import { getUserChannelProfile } from "../api/auth.api";

function userChannelProfile(username) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await getUserChannelProfile(username);
      console.log("PROFILE RESPONSE:", response);

      // ApiResponse ke andar actual user data
      setUser(response?.data);
    } catch (error) {
        console.log("PROFILE ERROR",error)
      setError(
        error?.response?.data?.message ||
          "Failed to fetch profile"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!username) {
        console.log("Username missing!");
        return
    }

    fetchProfile();
  }, [username]);

  return {
    user,
    loading,
    error,
    refetch: fetchProfile,
  };
}

export default userChannelProfile;