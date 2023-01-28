import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");

const updateBooking = ({ id, ...inputs }) =>
  axios.put(`${import.meta.env.VITE_BACKEND_URL}/reservations/${id}`, inputs, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

const useUpdateBooking = (options) => {
  const queryClient = useQueryClient();
  return useMutation(updateBooking, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.BOOKING]);
      options?.onSuccess?.();
    },
  });
};

export default useUpdateBooking;
