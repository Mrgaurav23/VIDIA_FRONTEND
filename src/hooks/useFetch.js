import { useState,useEffect } from "react";
import {api} from '../index.js'

function useFetch(endpoint,options={}){
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    const fetchData = async ()=>{
        try {
            setLoading(true)
            const response = await api(endpoint,options);
            setData(response.data?.data || response.data);
            setError(null);
        } 
        catch (error) {
            setError(error?.response?.data?.message || "Something went wrong!");
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(!endpoint) return;
        fetchData();
    },[endpoint])

    return { data, loading, error, refetch: fetchData };
}

export default useFetch;