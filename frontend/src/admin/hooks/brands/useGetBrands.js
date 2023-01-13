import { useQuery } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");

const fetchBrands = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/brands`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then((response) => response.data);

const useGetBrands = (options) =>
  useQuery(queryKeys.BRANDS, fetchBrands, options);

export default useGetBrands;
