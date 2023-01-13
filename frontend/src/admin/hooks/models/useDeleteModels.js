import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");
const deleteModels = (id) =>
  axios.delete(`${import.meta.env.VITE_BACKEND_URL}/models/${id}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

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
