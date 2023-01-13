import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import useGetVehicles from "../../hooks/vehicles/useGetVehicles";
import convertToPieFormat from "./convertToPieFormat";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BrandVehicles() {
  const { isLoading, isError, data } = useGetVehicles();
  if (isLoading) {
    return <p>Loading ...</p>;
  }
  if (isError) {
    return <p>Error during loading ...</p>;
  }
  return <Pie data={convertToPieFormat(data)} />;
}
