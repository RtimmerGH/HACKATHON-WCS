import ResultCard from "../component/ResultCard";

export default function SearchResults({
  vehicles,
  reservation,
  loginModal,
  setLoginModal,
}) {
  if (vehicles.length > 0) {
    return (
      <div className="md: bg-[#CADEDF] w-screen h-screen">
        <h1 className="text-3xl font-bold text-center py-7">
          Electric vehicles renting
        </h1>
        <div className="flex flex-row flex-wrap justify-evenly">
          {vehicles.map((car) => {
            return (
              <ResultCard
                car={car}
                reservation={reservation}
                loginModal={loginModal}
                setLoginModal={setLoginModal}
              />
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="text-center">
      <div className="text-center mt-10">
        No available vehicles, please make a new research !
      </div>
      <a
        href="/"
        className="text-center inline-flex px-3 py-2 text-m font-medium text-center text-white bg-gradient-to-r from-lime-400 to-cyan-500 rounded-lg m-5"
      >
        Home
      </a>
    </div>
  );
}
