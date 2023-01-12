import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const deleteUser = (id) =>
  axios.delete(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`);

const useDeleteUser = (options) => {
  const queryClient = useQueryClient();
  return useMutation(deleteUser, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.USERS]);
      options?.onSuccess?.();
    },
  });
};

export default useDeleteUser;
