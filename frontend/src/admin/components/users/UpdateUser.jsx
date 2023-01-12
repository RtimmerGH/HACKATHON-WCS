/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import useUpdateUser from "../../hooks/users/useUpdateUser";
import useGetRanks from "../../hooks/ranks/useGetRanks";

function UpdateUser({ openUpdateSidebar, setOpenUpdateSidebar }) {
  const [enabled, setEnabled] = useState(openUpdateSidebar.isAdmin);
  const [userInfo, setUserInfo] = useState({
    id: openUpdateSidebar.id || "",
    lastname: openUpdateSidebar.lastname || "",
    firstname: openUpdateSidebar.firstname || "",
    email: openUpdateSidebar.email || "",
    admin: openUpdateSidebar.admin || "",
  });

  const { mutate: updateUser } = useUpdateUser();
  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser({
      id: userInfo.id,
      lastname: userInfo.lastname,
      firstname: userInfo.firstname,
      email: userInfo.email,
      admin: parseInt(userInfo.admin, 10),
    });
    setOpenUpdateSidebar({ ...openUpdateSidebar, show: false });
  };

  const { isLoading, isError, data } = useGetRanks();
  if (isLoading) {
    return <div>Rank loading ...</div>;
  }
  if (isError) {
    return <div>Error during rank loading</div>;
  }

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
                          Modify user
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
                          apporter au collaborateur respectent le règlement de
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
                                Lastname *
                              </label>
                              <div className="mt-1">
                                <input
                                  value={userInfo.lastname}
                                  onChange={(e) =>
                                    setUserInfo((existingValues) => ({
                                      ...existingValues,
                                      lastname: e.target.value,
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
                                htmlFor="userFirstname"
                                className="block text-sm font-medium text-gray-900"
                              >
                                Firstname *
                              </label>
                              <div className="mt-1">
                                <input
                                  value={userInfo.firstname}
                                  onChange={(e) =>
                                    setUserInfo((existingValues) => ({
                                      ...existingValues,
                                      firstname: e.target.value,
                                    }))
                                  }
                                  type="text"
                                  name="userFirstname"
                                  id="userFirstname"
                                  className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                  required="required"
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="userMail"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Mail *
                            </label>
                            <div className="mt-1">
                              <input
                                value={userInfo.email}
                                onChange={(e) =>
                                  setUserInfo((existingValues) => ({
                                    ...existingValues,
                                    email: e.target.value,
                                  }))
                                }
                                type="email"
                                name="userMail"
                                id="userMail"
                                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                required="required"
                              />
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-full">
                              <label
                                htmlFor="location"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Location
                              </label>
                              <select
                                id="location"
                                name="location"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                onChange={(e) =>
                                  setUserInfo((existingValues) => ({
                                    ...existingValues,
                                    admin: e.target.value,
                                  }))
                                }
                              >
                                {data.map((rank) => (
                                  <option value={rank.id}>{rank.name}</option>
                                ))}
                              </select>
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
                      Modifier le collaborateur
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

export default UpdateUser;
