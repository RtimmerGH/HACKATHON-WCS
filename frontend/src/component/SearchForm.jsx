import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchForm() {
  const [agencies, setAgencies] = useState([]);
  const [types, setTypes] = useState([]);
  // const [agency, setAgency] = useState([]);
  // const [startDate, setStartDate] = useState([]);
  // const [endDate, setEndDate] = useState([]);
  // const [startPeriod, setStartPeriod] = useState([]);
  // const [endPeriod, setEndPeriod] = useState([]);
  const today = new Date();
  const todayFormat = today.toISOString().split("T")[0];

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
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.warn("soumis !");
  }

  return (
    <div className="lg:w-1/2 lg:border lg:pb-5 bg-[#CADEDF] md:rounded-lg md:m-5 lg:shadow-2xl">
      <div className="divcenter">
        <h1 className="text-3xl font-bold text-center py-7">
          Electric vehicles renting
        </h1>
        <h4 className="text-lg text-gray-500 text-center mb-8">
          Same return station
        </h4>
        <form className="formCenter" onSubmit={handleSubmit}>
          <div className="mb-6 text-center bg-white border border-gray-300 rounded-lg md:w-full">
            <select
              type="select"
              name="location"
              id="location"
              className="bg-white text-gray-900 text-xl rounded-lg p-3 w-full"
            >
              <option defaultValue="">--Please choose an agency--</option>
              {agencies.map((agency) => {
                return (
                  <option defaultValue={agency.id} key={agency.id}>
                    {agency.address} - {agency.city}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-6 text-center bg-white border border-gray-300 rounded-lg md:w-full">
            <select className="md:mx-10">
              <option>Morning</option>
              <option>Afternoon</option>
            </select>
            <input
              type="date"
              id="start"
              name="start"
              defaultValue={todayFormat}
              min={todayFormat}
              className="bg-white text-gray-900 text-xl p-3 md:mx-10"
            />
          </div>
          <div className="mb-6 text-center bg-white border border-gray-300 rounded-lg md:w-full flex-row justify-around">
            <select className="md:mx-10">
              <option>Morning</option>
              <option>Afternoon</option>
            </select>
            <input
              type="date"
              id="end"
              name="end"
              defaultValue={todayFormat}
              min={todayFormat}
              className="bg-white text-gray-900 text-xl p-3 md:mx-10"
            />
          </div>
          <div className="mb-6 text-center bg-white border border-gray-300 rounded-lg md:w-full flex-row justify-around">
            <select
              type="select"
              name="type"
              id="type"
              className="bg-white text-gray-900 text-xl p-3 w-full"
            >
              {types.map((type) => {
                return (
                  <option defaultValue={type.id} key={type.id}>
                    {type.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-6 text-center flex p-3">
            <input type="checkbox" id="lessThan50km" name="lessThan50km" />
            <p className="text-xl">I do less than 50 km</p>
          </div>
          <button
            type="submit"
            className="rounded-lg bg-gradient-to-r from-lime-400 to-cyan-500 text-2xl font-bold text-white py-2 md:w-full w-1/2"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
