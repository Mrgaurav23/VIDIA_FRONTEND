import api from "./axios.js";

export const getUserChannelProfile = async (username) => {
    try {
        // backend me route kuch is tarah hona chahiye
        const response = await api.get(`/users/c/${username}`)

        // Backend se jo data aayega, hum directly wahi return kar rahe hain
        return response.data
    } catch (error) {
        // Agar koi error aaye (jaise user not found), toh yahan handle hoga
        console.error("Error fetching channel profile:", error?.response?.data || error.message);
        throw error;
    }
}

/*
export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/users/login', credentials);
        return response.data;
    } catch (error) {
        throw error;
    }
};
*/

/*
export const logoutUser = async () => {
    try {
        const response = await api.post('/users/logout');
        return response.data;
    } catch (error) {
        throw error;
    }
};
*/