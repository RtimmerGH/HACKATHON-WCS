import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");
const deleteAgencies = (id) =>
  axios.delete(`${import.meta.env.VITE_BACKEND_URL}/agencies/${id}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

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
