import { useState } from "react";

const useApi = () => {
  const [data, setData] = useState<{} | Error>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (apiFunc: () => Promise<{}>) => {
    setLoading(true);

    return new Promise(async (resolve, reject) => {
      try {
        const response = await apiFunc();
        setLoading(false);

        // eslint-disable-next-line no-undef
        if (response instanceof Response) {
          setError(!response.ok);
          response.json().then((jsonResponse) => {
            setData(jsonResponse);
          });
        } else {
          setError(false);
          setData(response);
        }

        resolve(response);
      } catch (err) {
        setError(true);
        setLoading(false);
        setData(err);
        reject(err);
      }
    });
  };

  return { data, error, loading, request };
};

export default useApi;
