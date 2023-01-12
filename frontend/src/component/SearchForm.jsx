import "../App.css";

export default function SearchForm() {
  return (
    <div className="lg:w-1/2 lg:border lg:pb-5 bg-[#CADEDF] md:rounded-lg md:m-5 lg:shadow-2xl">
      <div className="divcenter">
        <h1 className="text-3xl font-bold text-center py-7">
          Electric vehicles renting
        </h1>
        <h4 className="text-lg text-gray-500 text-center mb-8">
          Same return station
        </h4>
        <form className="formCenter">
          <div className="mb-6 text-center bg-stone-400 border border-gray-300 rounded-lg md:w-full">
            <select
              type="select"
              name="location"
              id="location"
              className="bg-stone-400 text-gray-900 text-xl rounded-lg p-3"
            >
              <option value="">--Please choose an option--</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
            </select>
          </div>
          <div className="mb-6 text-center bg-stone-400 border border-gray-300 rounded-lg md:w-full">
            <input
              type="date"
              id="start"
              name="start"
              value="2022-07-06"
              min="2018-01-01"
              max="2018-12-31"
              className="bg-stone-400 text-gray-900 text-xl p-3"
            />
          </div>
          <div className="mb-6 text-center bg-stone-400 border border-gray-300 rounded-lg md:w-full">
            <input
              type="date"
              id="end"
              name="end"
              value="2022-07-06"
              min="2018-01-01"
              max="2018-12-31"
              className="bg-stone-400 text-gray-900 text-xl p-3"
            />
          </div>
          <div className="mb-6 text-center bg-stone-400 border border-gray-300 rounded-lg md:w-full">
            <select
              type="select"
              name="location"
              id="location"
              className="bg-stone-400 text-gray-900 text-xl p-3"
            >
              <option value="car">Car</option>
              <option value="bike">Bike</option>
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
