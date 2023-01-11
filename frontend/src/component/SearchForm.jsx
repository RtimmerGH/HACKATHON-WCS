export default function SearchForm() {
  return (
    <>
      <h4 class="text-lg text-gray-500 text-center mb-8">Same return station</h4>
      <form class="">
        <div class="mb-6 text-center bg-stone-400 border border-gray-300 rounded-lg w-5/6">
          <select type="select" name="location" id="location" className="bg-stone-400 text-gray-900 text-xl rounded-lg p-3">
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </div>
        <div class="mb-6 text-center bg-stone-400 border border-gray-300 rounded-lg w-5/6">
          <input type="date" id="start" name="start" value="2022-07-06" min="2018-01-01" max="2018-12-31" className="bg-stone-400 text-gray-900 text-xl p-3" />
        </div>
        <div class="mb-6 text-center bg-stone-400 border border-gray-300 rounded-lg w-5/6">
          <input type="date" id="start" name="start" value="2022-07-06" min="2018-01-01" max="2018-12-31" className="bg-stone-400 text-gray-900 text-xl p-3" />
        </div>
        <div class="mb-6 text-center bg-stone-400 border border-gray-300 rounded-lg w-5/6">
          <select type="select" name="location" id="location" className="bg-stone-400 text-gray-900 text-xl p-3">
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>
        </div>
        <div class="mb-6 text-center flex p-3 w-5/6">
          <input type="checkbox" id="lessThan50km" name="lessThan50km"></input>
          <p className="text-xl">I do less than 50 km</p>
        </div>
        <button type="submit" className="rounded-lg bg-gradient-to-r from-lime-400 to-cyan-500 w-5/6 text-2xl font-bold text-white py-2">Search</button>
      </form>
    </>
  )
}