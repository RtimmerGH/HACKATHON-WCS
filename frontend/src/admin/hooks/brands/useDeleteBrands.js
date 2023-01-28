import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");

const deleteBrands = (id) =>
  axios.delete(`${import.meta.env.VITE_BACKEND_URL}/brands/${id}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

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
