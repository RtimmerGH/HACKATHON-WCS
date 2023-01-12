import { useQuery } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const fetchModels = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/models`)
    .then((response) => response.data);

const useGetModels = (options) =>
  useQuery(queryKeys.MODELS, fetchModels, options);

export default useGetModels;
