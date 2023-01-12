import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const postAgencies = (inputs) =>
  axios.post(`${import.meta.env.VITE_BACKEND_URL}/agencies`, inputs);

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
