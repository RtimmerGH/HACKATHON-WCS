import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const postBrands = (inputs) =>
  axios.post(`${import.meta.env.VITE_BACKEND_URL}/brands`, inputs, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjczNTE1NjIyLCJleHAiOjE2NzM2MDIwMjJ9.YfkaXmqk7myHCw9q-kOYfcOLZGtZ7_8aCshtM6Yg9m8",
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
