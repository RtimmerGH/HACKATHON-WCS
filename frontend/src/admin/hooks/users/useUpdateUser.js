import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const updateUser = ({ id, ...inputs }) =>
  axios.put(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`, inputs);

const useUpdateUser = (options) => {
  const queryClient = useQueryClient();
  return useMutation(updateUser, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.USERS]);
      options?.onSuccess?.();
    },
  });
};

export default useUpdateUser;
