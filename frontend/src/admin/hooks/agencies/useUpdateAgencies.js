import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");
const updateAgencies = ({ id, ...inputs }) =>
  axios.put(`${import.meta.env.VITE_BACKEND_URL}/agencies/${id}`, inputs, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

const useUpdateAgencies = (options) => {
  const queryClient = useQueryClient();
  return useMutation(updateAgencies, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.AGENCIES]);
      options?.onSuccess?.();
    },
  });
};

export default useUpdateAgencies;
