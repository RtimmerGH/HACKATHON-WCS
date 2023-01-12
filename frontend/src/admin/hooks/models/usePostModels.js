import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const postModels = (inputs) =>
  axios.post(`${import.meta.env.VITE_BACKEND_URL}/models`, inputs);

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
