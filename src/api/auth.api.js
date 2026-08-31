import api from "./axios.js";

export const registerUser = async (formData) => {
  try {
    const response = await api.post("/users/register",formData,{
      headers : {
        "Content-Type": "multipart/form-data",
      }
    })
    
    return response.data
  } catch (error) {
    console.error(
      "Error while register user ::",
      error?.response?.data || error.message,
    );
  }
}


export const getUserChannelProfile = async (username) => {
  try {
    // backend me route kuch is tarah hona chahiye
    const response = await api.get(`/users/c/${username}`);

    // Backend se jo data aayega, hum directly wahi return kar rahe hain
    return response.data;
  } catch (error) {
    // Agar koi error aaye (jaise user not found), toh yahan handle hoga
    console.error(
      "Error fetching channel profile:",
      error?.response?.data || error.message,
    );
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/users/login", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const token = localStorage.getItem("accessToken");

    const response = await api.post(
      "/users/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAccountDetails = async (credentials) => {
  try {
    const response = await api.patch("/users/update-account", credentials);

    return response.data;
  } catch (error) {
    console.error(
      "ERROR :: updateAccountDetailsApi",
      error.response?.data || error.message,
    );

    throw error;
  }
};

export const changePassword = async (credentials) => {
  try {
    const response = await api.post("/users/change-password",credentials);

    return response.data
  } catch (error) {
    console.error(
      "ERROR :: changePasswordApi",
      error.response?.data || error.message,
    );
  }
}

export const updateUserAvatar = async (formData) => {
  try {
    const response = await api.patch("/users/update-avatar",formData)
  
    return response.data
  } catch (error) {
    console.error("ERROR :: updateUserAvatarApi",
      error.response?.data || error.message,
    );
    throw error
  }
}

export const getWatchHistory = async () => {
  try {
    const response = await api.get("/users/watch-history")

    return response.data
  } catch (error) {
    console.error("ERROR :: getwatchhistoryapi",
      error.response?.data || error.message
    )
  }
}
