import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const deleteBrands = (id) =>
  axios.delete(`${import.meta.env.VITE_BACKEND_URL}/brands/${id}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjczNTE1NjIyLCJleHAiOjE2NzM2MDIwMjJ9.YfkaXmqk7myHCw9q-kOYfcOLZGtZ7_8aCshtM6Yg9m8",
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
