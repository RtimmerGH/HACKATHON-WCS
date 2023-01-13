import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");

const updateBrands = ({ id, ...inputs }) =>
  axios.put(`${import.meta.env.VITE_BACKEND_URL}/brands/${id}`, inputs, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

const useUpdateBrands = (options) => {
  const queryClient = useQueryClient();
  return useMutation(updateBrands, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.BRANDS]);
      options?.onSuccess?.();
    },
  });
};

export default useUpdateBrands;
