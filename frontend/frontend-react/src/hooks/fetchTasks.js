import axios from "axios";

const useFetchData = async () => await axios("https://dog.ceo/api/breeds/image/random");

export default useFetchData

//WORKING:
// import { useEffect, useState } from "react";
// import axios from "axios";

// const useFetchData = () => {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data: response } = await axios.get("https://dog.ceo/api/breeds/image/random");
//       setData(response);
//     };

//     fetchData();
//   }, []);

//   return {
//     data,
//   };
// };

// export default useFetchData;
