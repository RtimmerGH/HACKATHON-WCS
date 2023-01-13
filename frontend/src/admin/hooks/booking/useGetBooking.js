import { useQuery } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import queryKeys from "../../constants/queryKeys";

const userToken = Cookies.get("userToken");
const fetchBooking = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/reservations`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then((response) => response.data);

const useGetBooking = (options) =>
  useQuery(queryKeys.BOOKING, fetchBooking, options);

export default useGetBooking;
