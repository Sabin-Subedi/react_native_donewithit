import React, { useState } from "react";

export default function useApi(apiFunc) {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (...args) => {
    setIsLoading(true);
    const response = await apiFunc(...args);
    setIsLoading(false);

    if (!response.ok) {
      setError(true);
      return response;
    }

    setError(false);
    setData(response.data);
    return response;
  };

  return { data, isLoading, error, request };
}
