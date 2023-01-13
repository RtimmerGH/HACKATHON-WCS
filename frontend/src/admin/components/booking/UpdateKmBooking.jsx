/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useQueryClient } from "react-query";
import useGetVehicleById from "../../hooks/vehicles/useGetVehicleById";
import useUpdateVehicles from "../../hooks/vehicles/useUpdateVehicles";
import convertDataInGoodFormat from "../utils/convertDataInGoodFormat";
import queryKeys from "../../constants/queryKeys";

function UpdateKmBooking({ openUpdateSidebar, setOpenUpdateSidebar }) {
  // const [bookingInfo, setBookingInfo] = useState({
  //   idVehicle: openUpdateSidebar.idVehicle || "",
  // });
  const [kmVehicle, setKmVehicle] = useState("");
  const queryClient = useQueryClient();

  const { isLoading, data: vehicle } = useGetVehicleById(
    openUpdateSidebar.idVehicle,
    {
      onSuccess: (vehicle) => setKmVehicle(vehicle.km),
    }
  );
  useEffect(() => setKmVehicle(vehicle?.km || ""), [vehicle]);
  const { mutate: updateVehicle } = useUpdateVehicles({
    onSuccess: () =>
      queryClient.setQueryData(queryKeys.VEHICLE(vehicle.id), {
        ...vehicle,
        km: kmVehicle,
      }),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    updateVehicle({
      ...vehicle,
      commissioningDate: convertDataInGoodFormat(vehicle.commissioningDate),
      km: kmVehicle,
    });
    setOpenUpdateSidebar({ ...openUpdateSidebar, show: false });
  };
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
                    <div className="py-6 px-4 bg-emerald-700 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium text-white">
                          Récupération voiture
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="bg-emerald-700 rounded-md text-emerald-200 hover:text-white"
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
                        <p className="text-sm text-emerald-300">
                          Be sure that the booking's informations you want to
                          create complies with the company’s regulations
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="px-4 divide-y divide-gray-200 sm:px-6">
                        <div className="pt-6 pb-5 flex flex-col gap-4">
                          <div className="flex flex-col gap-6">
                            {!isLoading && (
                              <div>
                                <label
                                  htmlFor="km"
                                  className="block text-sm font-medium text-gray-900"
                                >
                                  Km *
                                </label>
                                <div className="mt-1">
                                  <input
                                    value={kmVehicle}
                                    onChange={(e) =>
                                      setKmVehicle(e.target.value)
                                    }
                                    type="text"
                                    name="km"
                                    id="km"
                                    className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    required="required"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50    "
                      onClick={() => setOpenUpdateSidebar({ show: false })}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700    "
                    >
                      Confirmer la récupération
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

export default UpdateKmBooking;
