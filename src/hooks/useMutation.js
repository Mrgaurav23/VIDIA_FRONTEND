import { useState } from "react";
import { api } from "../index.js";

function useMutation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (method, endpoint, body = {}) => {
    try {
      setLoading(true);
      setError(null);

      const response = await api[method](endpoint, body);

      return response.data;
    } catch (error) {
      const message = error?.response?.data?.message || "Something went wrong!";

      setError(message);

      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading, error };
}

export default useMutation;
