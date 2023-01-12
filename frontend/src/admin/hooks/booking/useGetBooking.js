import { useQuery } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const fetchBooking = () =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/reservation`)
    .then((response) => response.data);

const useGetBooking = (options) =>
  useQuery(queryKeys.BOOKING, fetchBooking, options);

export default useGetBooking;
