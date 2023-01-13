import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");
const deleteBooking = (id) =>
  axios.delete(`${import.meta.env.VITE_BACKEND_URL}/reservations/${id}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

const useDeleteBooking = (options) => {
  const queryClient = useQueryClient();
  return useMutation(deleteBooking, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.BOOKING]);
      options?.onSuccess?.();
    },
  });
};

export default useDeleteBooking;
