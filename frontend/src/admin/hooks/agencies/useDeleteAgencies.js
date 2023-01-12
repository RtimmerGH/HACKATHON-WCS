import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const deleteAgencies = (id) =>
  axios.delete(`${import.meta.env.VITE_BACKEND_URL}/agencies/${id}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjczNTE1NjIyLCJleHAiOjE2NzM2MDIwMjJ9.YfkaXmqk7myHCw9q-kOYfcOLZGtZ7_8aCshtM6Yg9m8",
    },
  });

const useDeleteAgencies = (options) => {
  const queryClient = useQueryClient();
  return useMutation(deleteAgencies, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.AGENCIES]);
      options?.onSuccess?.();
    },
  });
};

export default useDeleteAgencies;
