import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");
const updateModels = ({ id, ...inputs }) =>
  axios.put(`${import.meta.env.VITE_BACKEND_URL}/models/${id}`, inputs, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

const useUpdateModels = (options) => {
  const queryClient = useQueryClient();
  return useMutation(updateModels, {
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries([queryKeys.MODELS]);
      options?.onSuccess?.();
    },
  });
};

export default useUpdateModels;
