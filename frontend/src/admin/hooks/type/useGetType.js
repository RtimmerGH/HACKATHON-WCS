import { useQuery } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");

const fetchType = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/types`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then((response) => response.data);

const useGetType = (options) => useQuery(queryKeys.TYPES, fetchType, options);

export default useGetType;
