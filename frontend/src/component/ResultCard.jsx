export default function ResultCard({ car }) {
  return (
    <div className="flex flex-col bg-zinc-300 text-gray-900 border rounded shadow-md md:flex-row md:max-w-xl m-6">
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
        <a
          href="/"
          className="inline-flex px-3 py-2 text-m font-medium text-center text-white bg-gradient-to-r from-lime-400 to-cyan-500 rounded-lg"
        >
          RESERVE
        </a>
      </div>
    </div>
  );
}
