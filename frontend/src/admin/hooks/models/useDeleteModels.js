import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const deleteModels = (id) =>
  axios.delete(`${import.meta.env.VITE_BACKEND_URL}/models/${id}`);

const useDeleteModels = (options) => {
  const queryClient = useQueryClient();
  return useMutation(deleteModels, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.MODELS]);
      options?.onSuccess?.();
    },
  });
};

export default useDeleteModels;
