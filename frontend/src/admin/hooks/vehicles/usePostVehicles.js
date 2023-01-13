import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");

const postVehicles = (inputs) =>
  axios.post(`${import.meta.env.VITE_BACKEND_URL}/vehicles`, inputs, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

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
