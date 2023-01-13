import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");

const postAgencies = (inputs) =>
  axios.post(`${import.meta.env.VITE_BACKEND_URL}/agencies`, inputs, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

const usePostAgencies = (options) => {
  const queryClient = useQueryClient();
  return useMutation(postAgencies, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.AGENCIES]);
      options?.onSuccess?.();
    },
  });
};

export default usePostAgencies;
