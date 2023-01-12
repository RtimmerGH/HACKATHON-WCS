/* eslint-disable react/prop-types */
import { useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import useGetUsers from "../../hooks/users/useGetUsers";
import DeleteUserConfirm from "./DeleteUserConfirm";
import UpdateUser from "./UpdateUser";

function TableUsers({ searchbarFilter }) {
  const [confirmModal, setConfirmModal] = useState({
    show: false,
    userId: null,
    userName: "",
  });
  const openModalConfirm = (userName, userId) => {
    const completeUserName = `${userName.firstname} ${userName.lastname}`;
    setConfirmModal({ show: true, userId, userName: completeUserName });
  };
  const [openUpdateSidebar, setOpenUpdateSidebar] = useState({
    show: false,
    id: "",
    lastname: "",
    firstname: "",
    email: "",
    admin: "",
    role: "",
  });
  const { isLoading, isError, data } = useGetUsers();
  if (isLoading) {
    return <div>Users loading ...</div>;
  }
  if (isError) {
    return <div>Error during users loading</div>;
  }
  return (
    <div className="flex flex-col">
      {confirmModal.show && (
        <DeleteUserConfirm
          confirmModal={confirmModal}
          setConfirmModal={setConfirmModal}
          espaceName={confirmModal.userName}
        />
      )}
      {openUpdateSidebar.show && (
        <UpdateUser
          openUpdateSidebar={openUpdateSidebar}
          setOpenUpdateSidebar={setOpenUpdateSidebar}
        />
      )}
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    USER
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    RANK
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data
                  .filter(
                    (user) =>
                      `${user.firstname} ${user.lastname}`
                        .toLowerCase()
                        .includes(searchbarFilter.toLowerCase()) ||
                      `${user.lastname} ${user.firstname}`
                        .toLowerCase()
                        .includes(searchbarFilter.toLowerCase())
                  )
                  .map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {user.lastname} {user.firstname}
                            </div>
                            <div className="text-sm text-gray-500">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.role.toUpperCase()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm flex gap-4 font-medium">
                        <PencilSquareIcon
                          className="text-emerald-600 hover:text-emerald-900  w-6 h-6  cursor-pointer"
                          onClick={() =>
                            setOpenUpdateSidebar({
                              show: true,
                              id: user.id,
                              lastname: user.lastname,
                              firstname: user.firstname,
                              email: user.email,
                              admin: user.admin,
                              role: user.role,
                            })
                          }
                        />
                        <TrashIcon
                          className="text-red-600 w-6 h-6 hover:text-red-900 cursor-pointer"
                          onClick={() =>
                            openModalConfirm(
                              {
                                firstname: user.firstname,
                                lastname: user.lastname,
                              },
                              user.id
                            )
                          }
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableUsers;
