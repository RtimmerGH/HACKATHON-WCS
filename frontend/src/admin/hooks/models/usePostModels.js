import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");
const postModels = (inputs) =>
  axios.post(`${import.meta.env.VITE_BACKEND_URL}/models`, inputs, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

const usePostModels = (options) => {
  const queryClient = useQueryClient();
  return useMutation(postModels, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.MODELS]);
      options?.onSuccess?.();
    },
  });
};

export default usePostModels;
