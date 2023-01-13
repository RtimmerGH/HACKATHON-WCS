import { useQuery } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");
const fetchCategories = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/categories`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then((response) => response.data);

const useGetCategories = (options) =>
  useQuery(queryKeys.CATEGORIES, fetchCategories, options);

export default useGetCategories;
