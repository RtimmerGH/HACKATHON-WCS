import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SearchForm({ setVehicles, setReservation }) {
  const navigate = useNavigate();

  const today = new Date();
  const todayFormat = today.toISOString().substring(0, 16);

  const [agencies, setAgencies] = useState([]);
  const [types, setTypes] = useState([]);
  const [agency, setAgency] = useState(1);
  const [startDate, setStartDate] = useState(todayFormat);
  const [endDate, setEndDate] = useState(startDate);
  const [type, setType] = useState(1);
  const searchRequest = { agency, startDate, endDate, type };

  useEffect(() => {
    // get agencies
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/agencies`)
      .then((response) => {
        setAgencies(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.warn(error.response.data); // => the response payload
        }
      });
    // get categories
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/types`)
      .then((response) => {
        setTypes(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.warn(error.response.data); // => the response payload
        }
      });
    // get vehicles
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehicles`)
      .then((response) => {
        setVehicles(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.warn(error.response.data); // => the response payload
        }
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // get vehicles
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/vehicles?startDate=${startDate}&endDate=${endDate}&agencyId=${agency}&typeId=${type}`
      )
      .then((response) => {
        setVehicles(response.data);
        setReservation(searchRequest);
        navigate("/results");
      })
      .catch((error) => {
        if (error.response) {
          console.warn(error.response.data); // => the response payload
        }
      });
  }

  return (
    <div className="lg:w-1/2 lg:border lg:pb-5 bg-[#CADEDF] md:rounded-lg mx-auto my-3 lg:shadow-2xl">
      <div className="divcenter">
        <h1 className="text-3xl font-bold text-center py-3">
          Electric vehicles renting
        </h1>
        <h4 className="text-lg text-gray-500 text-center mb-8">
          Same return station
        </h4>

        <form className="formCenter" onSubmit={handleSubmit} method="GET">
          <div className="mb-6 text-center bg-white border border-gray-300 rounded-lg md:w-full">
            <select
              type="select"
              name="location"
              id="location"
              className="bg-white text-gray-900 text-xl rounded-lg p-3 w-full"
              onChange={(e) => setAgency(e.target.selectedIndex)}
            >
              <option defaultValue="" disabled>
                --Please choose an agency--
              </option>
              {agencies.map((theagency) => {
                return (
                  <option
                    id={theagency.id}
                    defaultValue={theagency.id}
                    key={theagency.id}
                  >
                    {theagency.city} - {theagency.address}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-6 text-center bg-white border border-gray-300 rounded-lg w-full">
            <input
              type="datetime-local"
              id="startDate"
              name="startDate"
              defaultValue={todayFormat}
              onChange={(e) => setStartDate(e.target.value)}
              min={todayFormat}
              className="bg-white text-gray-900 text-xl p-3 w-full"
            />
          </div>
          <div className="mb-6 text-center bg-white border border-gray-300 rounded-lg w-full flex-row justify-around">
            <input
              type="datetime-local"
              id="endDate"
              name="endDate"
              defaultValue={startDate}
              min={startDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-white text-gray-900 text-xl p-3 w-full"
            />
          </div>
          <div className="mb-6 text-center bg-white border border-gray-300 rounded-lg md:w-full flex-row justify-around">
            <select
              type="select"
              name="type"
              id="type"
              className="bg-white text-gray-900 text-xl p-3 w-full"
              onChange={(e) => setType(e.target.selectedIndex + 1)}
            >
              {types.map((thetype) => {
                return (
                  <option
                    defaultValue={thetype.id}
                    key={thetype.id}
                    id={thetype.id}
                  >
                    {thetype.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            type="submit"
            className=" flex justify-center rounded-lg bg-gradient-to-r from-lime-400 to-cyan-500 text-2xl font-bold text-white py-2 md:w-full w-1/2 my-6 mx-auto"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
