import { useState } from "react";
import {api} from '../component/index.js'

function useMutation(){
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const mutate = async (method,endpoint,body={})=>{
        try {
            setLoading(true)
            const response = await api[method](endpoint,body);
            setError(null)
            return response.data;
        }
        catch (error) {
            setError(error?.response?.data?.message || "Something went wrong!");
        }
        finally{
            setLoading(false)
        }
    }

    return { mutate, loading, error }
}

export default useMutation;