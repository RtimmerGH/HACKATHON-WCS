/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import { Switch, Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import useUpdateVehicles from "../../hooks/vehicles/useUpdateVehicles";
import useGetCategories from "../../hooks/categories/useGetCategories";
import useGetType from "../../hooks/type/useGetType";
import useGetModels from "../../hooks/models/useGetModels";
import useGetAgencies from "../../hooks/agencies/useGetAgencies";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function UpdateVehicles({ openUpdateSidebar, setOpenUpdateSidebar }) {
  const [enabled, setEnabled] = useState(true);
  const [vehicleInfo, setVehicleInfo] = useState({
    id: openUpdateSidebar.id || "",
    registration: openUpdateSidebar.registration || "",
    idCategory: openUpdateSidebar.idCategory || "",
    idType: openUpdateSidebar.idType || "",
    idModel: openUpdateSidebar.idModel || "",
    idAgency: openUpdateSidebar.idAgency || "",
    km: openUpdateSidebar.km || "",
    fuel: openUpdateSidebar.fuel || "",
    numDoor: openUpdateSidebar.numDoor || "",
    numPassenger: openUpdateSidebar.numPassenger || "",
    color: openUpdateSidebar.color || "",
    commissioningDate: openUpdateSidebar.commissioningDate || "",
    availability: openUpdateSidebar.availability || "",
    image: openUpdateSidebar.image || "",
  });

  const { data: dataCategory } = useGetCategories();
  const { data: dataType } = useGetType();
  const { data: dataModel } = useGetModels();
  const { data: dataAgency } = useGetAgencies();

  const { mutate: updateVehicles } = useUpdateVehicles();
  const handleSubmit = (event) => {
    event.preventDefault();
    updateVehicles({
      id: vehicleInfo.id,
      name: vehicleInfo.name,
      brand: vehicleInfo.brand,
      km: vehicleInfo.km || "",
    });
    setOpenUpdateSidebar({ ...openUpdateSidebar, show: false });
  };
  console.log(openUpdateSidebar);
  return (
    <Transition.Root show={openUpdateSidebar.show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-30 bg-gray-500 bg-opacity-75 inset-0 overflow-hidden"
        onClose={setOpenUpdateSidebar}
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
                    <div className="py-6 px-4 bg-indigo-700 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium text-white">
                          Modifier le véhicule
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() =>
                              setOpenUpdateSidebar({ show: false })
                            }
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-sm text-indigo-300">
                          Assure toi que les modifications que tu souhaites
                          apporter au véhicle respectent le règlement de
                          l'entreprise.
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="px-4 divide-y divide-gray-200 sm:px-6">
                        <div className="pt-6 pb-5 flex flex-col gap-4">
                          <div className="flex justify-between">
                            <div>
                              <label
                                htmlFor="userLastname"
                                className="block text-sm font-medium text-gray-900"
                              >
                                Registration *
                              </label>
                              <div className="mt-1">
                                <input
                                  value={vehicleInfo.registration}
                                  onChange={(e) =>
                                    setVehicleInfo((existingValues) => ({
                                      ...existingValues,
                                      registration: e.target.value,
                                    }))
                                  }
                                  type="text"
                                  name="userLastname"
                                  id="userLastname"
                                  className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                  required="required"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="userLastname"
                                className="block text-sm font-medium text-gray-900"
                              >
                                Km *
                              </label>
                              <div className="mt-1">
                                <input
                                  value={vehicleInfo.km}
                                  onChange={(e) =>
                                    setVehicleInfo((existingValues) => ({
                                      ...existingValues,
                                      km: e.target.value,
                                    }))
                                  }
                                  type="text"
                                  name="userLastname"
                                  id="userLastname"
                                  className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                  required="required"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-8">
                            <div className="w-full">
                              <label
                                htmlFor="category"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Category
                              </label>
                              <select
                                id="category"
                                name="category"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                value={vehicleInfo.idCategory}
                                onChange={(e) =>
                                  setVehicleInfo((previousValue) => ({
                                    ...previousValue,
                                    idCategory: e.target.value,
                                  }))
                                }
                              >
                                {dataCategory &&
                                  dataCategory.map((category) => (
                                    <option
                                      value={category.id}
                                      key={category.name}
                                    >
                                      {category.name}
                                    </option>
                                  ))}
                              </select>
                            </div>
                            <div className="w-full">
                              <label
                                htmlFor="type"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Type
                              </label>
                              <select
                                id="type"
                                name="type"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                value={vehicleInfo.idType}
                                onChange={(e) =>
                                  setVehicleInfo((previousValue) => ({
                                    ...previousValue,
                                    idType: e.target.value,
                                  }))
                                }
                              >
                                {dataType &&
                                  dataType.map((type) => (
                                    <option value={type.id} key={type.name}>
                                      {type.name}
                                    </option>
                                  ))}
                              </select>
                            </div>
                          </div>
                          <div className="flex gap-8">
                            <div className="w-full">
                              <label
                                htmlFor="model"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Model
                              </label>
                              <select
                                id="model"
                                name="model"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                value={vehicleInfo.idModel}
                                onChange={(e) =>
                                  setVehicleInfo((previousValue) => ({
                                    ...previousValue,
                                    idModel: e.target.value,
                                  }))
                                }
                              >
                                {dataModel &&
                                  dataModel.map((model) => (
                                    <option value={model.id} key={model.name}>
                                      {model.name}
                                    </option>
                                  ))}
                              </select>
                            </div>
                            <div className="w-full">
                              <label
                                htmlFor="agency"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Agency
                              </label>
                              <select
                                id="agency"
                                name="agency"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                value={vehicleInfo.idAgency}
                                onChange={(e) =>
                                  setVehicleInfo((previousValue) => ({
                                    ...previousValue,
                                    idAgency: e.target.value,
                                  }))
                                }
                              >
                                {dataAgency &&
                                  dataAgency.map((agency) => (
                                    <option value={agency.id} key={agency.city}>
                                      {agency.city}
                                    </option>
                                  ))}
                              </select>
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <div>
                              <label
                                htmlFor="fuel"
                                className="block text-sm font-medium text-gray-900"
                              >
                                Fuel *
                              </label>
                              <div className="mt-1">
                                <input
                                  value={vehicleInfo.fuel}
                                  onChange={(e) =>
                                    setVehicleInfo((existingValues) => ({
                                      ...existingValues,
                                      fuel: e.target.value,
                                    }))
                                  }
                                  type="text"
                                  name="fuel"
                                  id="fuel"
                                  className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                  required="required"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="numdoors"
                                className="block text-sm font-medium text-gray-900"
                              >
                                Numbers of doors *
                              </label>
                              <div className="mt-1">
                                <input
                                  value={vehicleInfo.numDoor}
                                  onChange={(e) =>
                                    setVehicleInfo((existingValues) => ({
                                      ...existingValues,
                                      numDoor: e.target.value,
                                    }))
                                  }
                                  type="text"
                                  name="numdoors"
                                  id="numdoors"
                                  className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                  required="required"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-8">
                            <div className="w-full">
                              <label
                                htmlFor="numpassengers"
                                className="block text-sm font-medium text-gray-900"
                              >
                                Numbers of passengers *
                              </label>
                              <div className="mt-1">
                                <input
                                  value={vehicleInfo.numPassenger}
                                  onChange={(e) =>
                                    setVehicleInfo((existingValues) => ({
                                      ...existingValues,
                                      numPassenger: e.target.value,
                                    }))
                                  }
                                  type="text"
                                  name="numpassengers"
                                  id="numpassengers"
                                  className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                  required="required"
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <label
                                htmlFor="color"
                                className="block text-sm font-medium text-gray-900"
                              >
                                Color *
                              </label>
                              <div className="mt-1">
                                <input
                                  value={vehicleInfo.color}
                                  onChange={(e) =>
                                    setVehicleInfo((existingValues) => ({
                                      ...existingValues,
                                      color: e.target.value,
                                    }))
                                  }
                                  type="text"
                                  name="color"
                                  id="color"
                                  className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                  required="required"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-8">
                            <div className="w-full">
                              <label
                                htmlFor="commissioningdate"
                                className="block text-sm font-medium text-gray-900"
                              >
                                Commissioning date *
                              </label>
                              <div className="mt-1">
                                <input
                                  value={vehicleInfo.commissioningDate}
                                  onChange={(e) =>
                                    setVehicleInfo((existingValues) => ({
                                      ...existingValues,
                                      commissioningDate: e.target.value,
                                    }))
                                  }
                                  type="date"
                                  name="commissioningdate"
                                  id="commissioningdate"
                                  className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                  required="required"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                              <p>Disponible</p>
                              <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={classNames(
                                  enabled ? "bg-indigo-600" : "bg-gray-200",
                                  "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                )}
                              >
                                <span className="sr-only">Use setting</span>
                                <span
                                  aria-hidden="true"
                                  className={classNames(
                                    enabled ? "translate-x-5" : "translate-x-0",
                                    "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                                  )}
                                />
                              </Switch>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => setOpenUpdateSidebar({ show: false })}
                    >
                      Retour
                    </button>
                    <button
                      type="submit"
                      className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Modifier le véhicle
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

export default UpdateVehicles;
