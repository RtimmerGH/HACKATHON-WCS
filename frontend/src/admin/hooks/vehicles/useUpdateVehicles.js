import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const token = Cookies.get("userToken");

const updateVehicles = ({ id, ...inputs }) =>
  axios.put(`${import.meta.env.VITE_BACKEND_URL}/vehicles/${id}`, inputs, {
    headers: {
      Authorization: `Bearer ${token}`,
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
