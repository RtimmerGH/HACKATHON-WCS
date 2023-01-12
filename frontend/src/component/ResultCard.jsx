import { useState, useEffect } from "react";
import axios from "axios";
import ResultModal from "./ResultModal";
import userImg from "../assets/user.png";
import colorImg from "../assets/color.png";
import bootImg from "../assets/boot.png";

export default function ResultCard({ car, reservation }) {
  const [resultModal, setResultModal] = useState(false);
  const [model, setModel] = useState(false);

  useEffect(() => {
    // get model
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/models/${car.idModel}`)
      .then((response) => {
        setModel(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.warn(error.response.data); // => the response payload
        }
      });
  }, []);

  const handleClick = () => {
    setResultModal(!resultModal);
  };

  return (
    <div
      key={car.id}
      className="flex flex-col bg-slate-100 text-gray-900 border rounded shadow-md md:flex-row md:min-w-1/3 m-6"
    >
      <img
        className="object-fill w-full h-full rounded md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={car.image}
        alt={car.idModel}
        key={car.id}
      />
      <div className="flex flex-col justify-end p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-500 ">
          {model.name}
        </h5>
        <div className="flex flex-row justify-around m-5 text-2xl">
          <div className="flex align-end">
            <img src={userImg} alt="logo user" className="h-10 w-10" />
            <p className="mx-3 font-bold text-gray-900">{car.numPassenger}</p>
          </div>
          <div className="flex align-end">
            <img src={colorImg} alt="logo user" className="h-8 w-8" />
            <p className="mx-3 font-bold text-gray-900">{car.color}</p>
          </div>
          <div className="flex align-end">
            <img src={bootImg} alt="logo user" className="h-12 w-12" />
            <p className="mx-3 font-bold text-gray-900">{car.numDoor}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleClick}
          className="inline-flex px-3 py-2 text-m font-medium text-center text-white bg-gradient-to-r from-lime-400 to-cyan-500 rounded-lg mx-auto"
        >
          Reserve
        </button>
        {resultModal && (
          <ResultModal
            reservation={reservation}
            setResultModal={setResultModal}
            car={car}
          />
        )}
      </div>
    </div>
  );
}
