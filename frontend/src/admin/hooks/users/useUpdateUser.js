import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");
const updateUser = ({ id, ...inputs }) =>
  axios.put(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`, inputs, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

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
