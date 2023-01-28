import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");

const postBrands = (inputs) =>
  axios.post(`${import.meta.env.VITE_BACKEND_URL}/brands`, inputs, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

const usePostBrands = (options) => {
  const queryClient = useQueryClient();
  return useMutation(postBrands, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.BRANDS]);
      options?.onSuccess?.();
    },
  });
};

export default usePostBrands;
