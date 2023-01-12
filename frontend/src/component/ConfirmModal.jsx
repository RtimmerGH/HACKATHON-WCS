export default function ConfirmModal() {
  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="backdrop-blur-sm fixed top-0 left-0 right-0 z-50 px-4 pt-80 md:pt-0 pt-100px overflow-x-hidden overflow-y-auto md:inset-0 h-full flex justify-center items-center"
    >
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="p-6 text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Congrats, your vehicle is ready for you !
            </h3>
            <a
              href="/"
              type="button"
              className="inline-flex px-3 py-2 text-m font-medium text-center text-white bg-gradient-to-r from-lime-400 to-cyan-500 rounded-lg"
            >
              Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
