import { useQuery } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const fetchUsers = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/users`)
    .then((response) => response.data);

const useGetUsers = (options) => useQuery(queryKeys.USERS, fetchUsers, options);

export default useGetUsers;
