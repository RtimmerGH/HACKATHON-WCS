import { useQuery } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const fetchType = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/types`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjczNTE1NjIyLCJleHAiOjE2NzM2MDIwMjJ9.YfkaXmqk7myHCw9q-kOYfcOLZGtZ7_8aCshtM6Yg9m8",
      },
    })
    .then((response) => response.data);

const useGetType = (options) => useQuery(queryKeys.TYPES, fetchType, options);

export default useGetType;
