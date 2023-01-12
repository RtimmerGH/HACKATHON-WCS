import { useQuery } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const fetchRanks = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/ranks`)
    .then((response) => response.data);

const useGetRanks = (options) => useQuery(queryKeys.RANKS, fetchRanks, options);

export default useGetRanks;
