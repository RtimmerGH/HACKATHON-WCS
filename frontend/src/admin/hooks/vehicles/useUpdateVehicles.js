import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const updateVehicles = ({ id, ...inputs }) =>
  axios.put(`${import.meta.env.VITE_BACKEND_URL}/vehicles/${id}`, inputs, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjczNTE1NjIyLCJleHAiOjE2NzM2MDIwMjJ9.YfkaXmqk7myHCw9q-kOYfcOLZGtZ7_8aCshtM6Yg9m8",
    },
  });

const useUpdateVehicles = (options) => {
  const queryClient = useQueryClient();
  return useMutation(updateVehicles, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.VEHICLES]);
      options?.onSuccess?.();
    },
  });
};

export default useUpdateVehicles;
