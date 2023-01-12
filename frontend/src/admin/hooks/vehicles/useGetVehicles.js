import { useQuery } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const fetchVehicles = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/vehicles`)
    .then((response) => response.data);

const useGetVehicles = (options) =>
  useQuery(queryKeys.VEHICLES, fetchVehicles, options);

export default useGetVehicles;
