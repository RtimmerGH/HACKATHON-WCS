import { useQuery } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const fetchCategories = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
    .then((response) => response.data);

const useGetCategories = (options) =>
  useQuery(queryKeys.CATEGORIES, fetchCategories, options);

export default useGetCategories;
