import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const deleteBrands = (id) =>
  axios.delete(`${import.meta.env.VITE_BACKEND_URL}/brands/${id}`);

const useDeleteBrands = (options) => {
  const queryClient = useQueryClient();
  return useMutation(deleteBrands, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.BRANDS]);
      options?.onSuccess?.();
    },
  });
};

export default useDeleteBrands;
