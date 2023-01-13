import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");

const postBooking = (inputs) =>
  axios.post(`${import.meta.env.VITE_BACKEND_URL}/reservations`, inputs, {
    headers: {
      Authorization: `Bearer ${userToken}`,
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
