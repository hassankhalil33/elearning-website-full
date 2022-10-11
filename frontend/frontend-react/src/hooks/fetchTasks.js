// import axios from "axios";

// const useFetchData = async () => await axios("https://dog.ceo/api/breeds/image/random");

// export default useFetchData

//WORKING:
import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchData = (api_url) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data: response } = await axios.get(`http://127.0.0.1:8000/api/${api_url}`);
      setData(response);
    };

    fetchData();
  }, []);

  return {
    data,
  };
};

export default fetchData;
