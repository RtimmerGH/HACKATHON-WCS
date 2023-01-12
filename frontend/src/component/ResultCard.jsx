import { useState } from "react";
import ResultModal from "./ResultModal";

export default function ResultCard({ car }) {
  const [resultModal, setResultModal] = useState(false);

  const handleClick = () => {
    setResultModal(!resultModal);
  };

  return (
    <div className="flex flex-col bg-zinc-300 text-gray-900 border rounded shadow-md md:flex-row md:min-w-1/3 m-6">
      <img
        className="object-cover w-full h-full rounded md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={car.image}
        alt={car.model}
      />
      <div className="flex flex-col justify-end p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {car.model}
        </h5>
        <p className="mb-3 font-normal text-gray-900">{car.nbrPassenger}</p>
        <button
          type="button"
          onClick={handleClick}
          className="inline-flex px-3 py-2 text-m font-medium text-center text-white bg-gradient-to-r from-lime-400 to-cyan-500 rounded-lg"
        >
          RESERVE
        </button>
        {resultModal && (
          <ResultModal setResultModal={setResultModal} car={car} />
        )}
      </div>
    </div>
  );
}
