import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const postBrands = (inputs) =>
  axios.post(`${import.meta.env.VITE_BACKEND_URL}/brands`, inputs);

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
