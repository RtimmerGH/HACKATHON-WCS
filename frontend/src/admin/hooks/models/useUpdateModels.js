import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const updateModels = ({ id, ...inputs }) =>
  axios.put(`${import.meta.env.VITE_BACKEND_URL}/models/${id}`, inputs, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjczNTE1NjIyLCJleHAiOjE2NzM2MDIwMjJ9.YfkaXmqk7myHCw9q-kOYfcOLZGtZ7_8aCshtM6Yg9m8",
    },
  });

const useUpdateModels = (options) => {
  const queryClient = useQueryClient();
  return useMutation(updateModels, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.MODELS]);
      options?.onSuccess?.();
    },
  });
};

export default useUpdateModels;
