import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const deleteAgencies = (id) =>
  axios.delete(`${import.meta.env.VITE_BACKEND_URL}/agencies/${id}`);

const useDeleteAgencies = (options) => {
  const queryClient = useQueryClient();
  return useMutation(deleteAgencies, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.AGENCIES]);
      options?.onSuccess?.();
    },
  });
};

export default useDeleteAgencies;
