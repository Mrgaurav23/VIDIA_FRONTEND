import { useState } from "react";

function useMutationn(mutationFunction) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (...args) => {
    try {
      setLoading(true);
      setError(null);

      const response = await mutationFunction(...args);

      return response;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";

      setError(message);

      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    mutate,
    loading,
    error,
  };
}

export default useMutationn;