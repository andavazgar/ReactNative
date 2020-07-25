import { useState } from "react";

const useApi = (isTest = false, apiFunc: (...args: Array<{}>) => Promise<Response>) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: Array<{}>) => {
    setLoading(true);

    // TODO: Remove this when backend API is hooked.
    if (isTest) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      return;
    }

    const response = await apiFunc(...args);
    setLoading(false);

    setError(!response.ok);
    const jsonResponse = await response.json();
    setData(jsonResponse);

    return response;
  };

  return { data, error, loading, request };
};

export default useApi;
