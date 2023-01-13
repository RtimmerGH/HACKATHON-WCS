import ResultCard from "../component/ResultCard";

export default function SearchResults({
  vehicles,
  reservation,
  loginModal,
  setLoginModal,
}) {
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
