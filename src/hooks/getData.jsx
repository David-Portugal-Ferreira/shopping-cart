import { useState, useEffect } from "react";

const useGetData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/${url}`)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Server error");
        }
        return res.json();
      })
      .then((res) => setData(res))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));

    return () => setData([]);
  }, [url]);

  return { data, loading, error}
};

export default useGetData;
