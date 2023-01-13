import { useQuery } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");

const fetchVehicles = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/vehicles`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then((response) => response.data);

const useGetVehicles = (options) =>
  useQuery(queryKeys.VEHICLES, fetchVehicles, options);

export default useGetVehicles;
