import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const deleteBooking = (id) =>
  axios.delete(`${import.meta.env.VITE_BACKEND_URL}/reservation/${id}`);

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
