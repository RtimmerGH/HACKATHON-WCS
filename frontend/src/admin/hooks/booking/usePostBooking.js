import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const postBooking = (inputs) =>
  axios.post(`${import.meta.env.VITE_BACKEND_URL}/reservations`, inputs, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjczNTE1NjIyLCJleHAiOjE2NzM2MDIwMjJ9.YfkaXmqk7myHCw9q-kOYfcOLZGtZ7_8aCshtM6Yg9m8",
    },
  });

const usePostBooking = (options) => {
  const queryClient = useQueryClient();
  return useMutation(postBooking, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.BOOKING]);
      options?.onSuccess?.();
    },
  });
};

export default usePostBooking;
