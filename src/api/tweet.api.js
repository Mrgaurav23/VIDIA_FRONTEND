import api from './axios.js'

export const createTweet = async (content) => {
    try {
        const response = await api.post("/tweets",{
            content
        })
    
        return response.data
    } catch (error) {
        console.error("ERROR OCCUR AT CREATETWEETAPI :: ", 
        error?.response?.data || error.message,)
    }
}

export const getUserTweet = async (userId) => {
    try {
        const response = await api.get(`/tweets/user/${userId}`)

        return response.data
    } catch (error) {
        console.error("ERROR OCCUR AT GETUSERTWEETAPI :: ", 
        error?.response?.data || error.message,)
    }
}

export const updateTweet = async (tweetId,content) => {
    try {
        const response = await api.patch(`/tweets/${tweetId}`,{
            content,
        })

        return response.data
    } catch (error) {
        console.error("ERROR OCCUR AT UPDATETWEETAPI :: ", 
        error?.response?.data || error.message,)
    }
}

export const deleteTweet = async (tweetId) => {
    try {
        const response = await api.delete(`/tweets/${tweetId}`)

        return response.data
    } catch (error) {
        console.error("ERROR OCCUR AT DELETETWEETAPI :: ", 
        error?.response?.data || error.message,)
    }
}