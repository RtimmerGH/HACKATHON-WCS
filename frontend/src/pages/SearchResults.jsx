import ResultCard from "../component/ResultCard";

const mocks = [
  {
    model: "Renault Zoe",
    image:
      "https://images.caradisiac.com/logos-ref/modele/modele--renault-zoe/S7-modele--renault-zoe.jpg",
    nbrPassenger: 5,
  },
  {
    model: "Peugeot E-traveller",
    image: "https://www.largus.fr/images/images/peugeot-e-traveller-7.jpg",
    nbrPassenger: 8,
  },
  {
    model: "Renault Zoe",
    image:
      "https://images.caradisiac.com/logos-ref/modele/modele--renault-zoe/S7-modele--renault-zoe.jpg",
    nbrPassenger: 5,
  },
  {
    model: "Peugeot E-traveller",
    image: "https://www.largus.fr/images/images/peugeot-e-traveller-7.jpg",
    nbrPassenger: 8,
  },
  {
    model: "Renault Zoe",
    image:
      "https://images.caradisiac.com/logos-ref/modele/modele--renault-zoe/S7-modele--renault-zoe.jpg",
    nbrPassenger: 5,
  },
];

export default function SearchResults() {
  return (
    <div className="md: bg-[#CADEDF] w-screen h-screen">
      <h1 className="text-3xl font-bold text-center py-7">
        Electric vehicles renting
      </h1>
      <div className="flex flex-row flex-wrap justify-evenly">
        {mocks.map((car) => {
          return <ResultCard car={car} />;
        })}
      </div>
    </div>
  );
}
