import { useQuery } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const fetchType = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/type`)
    .then((response) => response.data);

const useGetType = (options) =>
  useQuery(queryKeys.TYPES, fetchType, options);

export default useGetType;
