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
    <>
      <h1 className="text-3xl font-bold text-center my-7">
        Electric vehicles renting
      </h1>
      {mocks.map((car) => {
        return <ResultCard car={car} />;
      })}
    </>
  );
}
