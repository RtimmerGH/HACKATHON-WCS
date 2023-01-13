import { useQuery } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");

const fetchAgencies = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/agencies`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then((response) => response.data);

const useGetAgencies = (options) =>
  useQuery(queryKeys.AGENCIES, fetchAgencies, options);

export default useGetAgencies;
