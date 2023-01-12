import { useQuery } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const fetchAgencies = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/agencies`)
    .then((response) => response.data);

const useGetAgencies = (options) =>
  useQuery(queryKeys.AGENCIES, fetchAgencies, options);

export default useGetAgencies;
