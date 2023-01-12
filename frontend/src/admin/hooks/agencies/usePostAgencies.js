import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const postAgencies = (inputs) =>
  axios.post(`${import.meta.env.VITE_BACKEND_URL}/agencies`, inputs, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjczNTE1NjIyLCJleHAiOjE2NzM2MDIwMjJ9.YfkaXmqk7myHCw9q-kOYfcOLZGtZ7_8aCshtM6Yg9m8",
    },
  });

const usePostAgencies = (options) => {
  const queryClient = useQueryClient();
  return useMutation(postAgencies, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.AGENCIES]);
      options?.onSuccess?.();
    },
  });
};

export default usePostAgencies;
