import { useQuery } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");
const fetchModels = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/models`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then((response) => response.data);

const useGetModels = (options) =>
  useQuery(queryKeys.MODELS, fetchModels, options);

export default useGetModels;
