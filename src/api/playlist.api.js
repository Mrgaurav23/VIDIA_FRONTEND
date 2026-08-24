import api from './axios.js'

export const createPlaylist = async (playlistData) => {
    try {
        const response = await api.post("/playlist/",playlistData)
    
        return response.data
    } catch (error) {
        console.error(
            "ERROR :: createplaylistapi",
            error?.response?.data || error.message,
        )
    }
}

export const getUserPlaylists = async (userId) => {
    try {
        const response = await api.get(`/playlist/user/${userId}`)

        return response.data
    } 
    catch (error) {
        console.error(
            "ERROR :: getuserplaylistapi",
            error?.response?.data || error.message,
        )
    }
}