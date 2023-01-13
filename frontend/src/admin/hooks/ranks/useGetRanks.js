import { useQuery } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");

const fetchRanks = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/admins`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then((response) => response.data);

const useGetRanks = (options) => useQuery(queryKeys.RANKS, fetchRanks, options);

export default useGetRanks;
