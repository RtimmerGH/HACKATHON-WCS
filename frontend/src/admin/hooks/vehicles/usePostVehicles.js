import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const postVehicles = (inputs) =>
  axios.post(`${import.meta.env.VITE_BACKEND_URL}/vehicles`, inputs);

const usePostVehicles = (options) => {
  const queryClient = useQueryClient();
  return useMutation(postVehicles, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.VEHICLES]);
      options?.onSuccess?.();
    },
  });
};

export default usePostVehicles;
