import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const deleteVehicles = (id) =>
  axios.delete(`${import.meta.env.VITE_BACKEND_URL}/vehicles/${id}`);

const useDeleteVehicles = (options) => {
  const queryClient = useQueryClient();
  return useMutation(deleteVehicles, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.VEHICLES]);
      options?.onSuccess?.();
    },
  });
};

export default useDeleteVehicles;
