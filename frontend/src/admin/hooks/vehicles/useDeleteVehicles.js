import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");
const deleteVehicles = (id) =>
  axios.delete(`${import.meta.env.VITE_BACKEND_URL}/vehicles/${id}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

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
