import { useQuery } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");
const fetchUsers = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/users`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then((response) => response.data);

const useGetUsers = (options) => useQuery(queryKeys.USERS, fetchUsers, options);

export default useGetUsers;
