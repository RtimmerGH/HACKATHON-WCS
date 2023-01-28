import { useQuery } from "react-query";
import axios from "axios";
import queryKeys from "../../constants/queryKeys";

const fetchVehicleById = (id) =>
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/vehicles/${id}`)
    .then((response) => response.data);

const useGetVehicleById = (id, options) =>
  useQuery(queryKeys.VEHICLE(id), () => fetchVehicleById(id), options);

export default useGetVehicleById;
