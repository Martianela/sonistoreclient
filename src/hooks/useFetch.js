import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await makeRequest.get(url);
      //console.log(res);
      setData(res.data.data);
      try {
      } catch (error) {
        setErr(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, isLoading, err };
};

export default useFetch;
