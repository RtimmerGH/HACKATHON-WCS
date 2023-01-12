import { useQuery } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const fetchBrands = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/brands`)
    .then((response) => response.data);

const useGetBrands = (options) =>
  useQuery(queryKeys.BRANDS, fetchBrands, options);

export default useGetBrands;
