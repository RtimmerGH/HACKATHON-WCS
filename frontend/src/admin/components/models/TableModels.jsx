/* eslint-disable react/prop-types */
import { useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import DeleteModelsConfirm from "./DeleteModelsConfirm";
import UpdateModels from "./UpdateModels";
import useGetModels from "../../hooks/models/useGetModels";

function TableModels({ searchbarFilter }) {
  const [confirmModal, setConfirmModal] = useState({
    show: false,
    modelId: null,
    modelName: "",
  });
  const openModalConfirm = (modelId, modelName) => {
    setConfirmModal({ show: true, modelId, modelName });
  };
  const [openUpdateSidebar, setOpenUpdateSidebar] = useState({
    show: false,
    id: "",
    name: "",
    idBrand: null,
  });
  const { isLoading, isError, data } = useGetModels();
  if (isLoading) {
    return <div>Models loading ...</div>;
  }
  if (isError) {
    return <div>Error during models loading</div>;
  }
  return (
    <div className="flex flex-col">
      {confirmModal.show && (
        <DeleteModelsConfirm
          confirmModal={confirmModal}
          setConfirmModal={setConfirmModal}
          espaceName={confirmModal.modelName}
        />
      )}
      {openUpdateSidebar.show && (
        <UpdateModels
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
                    NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    BRAND
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
                    (model) =>
                      model.name
                        .toLowerCase()
                        .includes(searchbarFilter.toLowerCase()) ||
                      model.name
                        .toLowerCase()
                        .includes(searchbarFilter.toLowerCase())
                  )
                  .map((model) => (
                    <tr key={model.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {model.name}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {model.idBrand}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm flex gap-4 font-medium">
                        <PencilSquareIcon
                          className="text-indigo-600 hover:text-indigo-900  w-6 h-6  cursor-pointer"
                          onClick={() =>
                            setOpenUpdateSidebar({
                              show: true,
                              id: model.id,
                              name: model.name,
                              idBrand: model.idBrand,
                            })
                          }
                        />
                        <TrashIcon
                          className="text-red-600 w-6 h-6 hover:text-red-900 cursor-pointer"
                          onClick={() => openModalConfirm(model.id, model.name)}
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

export default TableModels;
