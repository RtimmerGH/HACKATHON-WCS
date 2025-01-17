/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import usePostModels from "../../hooks/models/usePostModels";
import useGetBrands from "../../hooks/brands/useGetBrands";

function CreateModels({
  displaySidebarCreateModels,
  setDisplaySidebarCreateModels,
}) {
  const [modelName, setModelName] = useState("");
  const [modelBrandId, setModelBrandId] = useState("1");
  const { isLoading, isError, data } = useGetBrands();
  const { mutate: postModels } = usePostModels();
  const handleSubmit = (event) => {
    event.preventDefault();
    postModels({ name: modelName, idBrand: modelBrandId });
    setDisplaySidebarCreateModels(false);
  };
  return (
    <Transition.Root show={displaySidebarCreateModels} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-30 bg-gray-500 bg-opacity-75 inset-0 overflow-hidden"
        onClose={setDisplaySidebarCreateModels}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />
          <div className="fixed inset-y-0 pl-16 max-w-full right-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <form
                  onSubmit={handleSubmit}
                  className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl"
                >
                  <div className="flex-1 h-0 overflow-y-auto">
                    <div className="py-6 px-4 bg-emerald-700 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium text-white">
                          Add model
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="bg-emerald-700 rounded-md text-emerald-200 hover:text-white"
                            onClick={() => setDisplaySidebarCreateModels(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-sm text-emerald-300">
                          Be sure that the model you want to create complies
                          with the company’s regulations
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="px-4 divide-y divide-gray-200 sm:px-6">
                        <div className="space-y-6 pt-6 pb-5">
                          <div>
                            <label
                              htmlFor="modelname"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Name
                            </label>
                            <div className="mt-1">
                              <input
                                value={modelName}
                                onChange={(e) => setModelName(e.target.value)}
                                type="text"
                                name="modename"
                                id="modelname"
                                className="block w-full shadow-sm sm:text-sm   border-gray-300 rounded-md"
                                required="required"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="brand"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Associated brand
                            </label>
                            <select
                              id="brand"
                              name="brand"
                              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300    sm:text-sm rounded-md"
                              value={modelBrandId}
                              onChange={(e) => setModelBrandId(e.target.value)}
                            >
                              {isLoading
                                ? "Chargement"
                                : isError
                                ? "Erreur lors du chargement"
                                : data.map((brand) => (
                                    <option key={brand.id} value={brand.id}>
                                      {brand.name}
                                    </option>
                                  ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50    "
                      onClick={() => setDisplaySidebarCreateModels(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700    "
                    >
                      Add model
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default CreateModels;
