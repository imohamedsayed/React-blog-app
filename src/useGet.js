import { useState, useEffect } from "react";
import axios from "axios";

const useGet = (endPoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/${endPoint}`)
      .then((response) => {
        if (response.status === 200) {
          setTimeout(() => {
            setData(response.data);
            setError(null);
            setLoading(false);
          }, 500);
        } else {
          console.log(response);
          throw Error("Could not fetch the data");
        }
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [endPoint]);
  return { data, isLoading, error };
};

export default useGet;
