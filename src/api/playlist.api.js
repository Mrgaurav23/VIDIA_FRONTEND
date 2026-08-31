import api from './axios.js'

export const createPlaylist = async (playlistData) => {
    try {
        const response = await api.post("/playlist/",playlistData)
        console.log("CREATE PLAYLIST RESPONSE :: ",response)
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
        // console.log("GET PLAYLIST RESPONSE:", response);
        // console.log("GET PLAYLIST DATA:", response.data);
        return response.data
    } 
    catch (error) {
        console.error(
            "ERROR :: getuserplaylistapi",
            error?.response?.data || error.message,
        )
        throw error
    }
}

export const getPlaylistById = async (playlistId) => {
    try {
        const response = await api.get(`/playlist/${playlistId}`)

        //console.log("🔥 PLAYLIST DETAIL RESPONSE:", response);
        //console.log("🔥 PLAYLIST DETAIL DATA:", response?.data);
        return response.data.data
    } catch (error) {
        console.error(
            "ERROR :: getuserplaylistpi",
            error?.response?.data || error.message
        )
    }
}

export const addVideoToPlaylist = async (playlistId, videoId) => {
    try {
        const response = await api.patch(`/playlist/add/${videoId}/${playlistId}`)

        return response.data
    } catch (error) {
        console.error(
            "ERROR :: addVideoToPlaylistapi",
            error?.response?.data || error.message
        )
        throw error
    }
}