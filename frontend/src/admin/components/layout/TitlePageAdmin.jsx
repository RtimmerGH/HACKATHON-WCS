/* eslint-disable react/prop-types */
import React from "react";

function TitlePageAdmin({ children }) {
  return (
    <div>
      <h1 className="mt-5 mb-2 font-medium text-2xl">{children}</h1>
    </div>
  );
}

export default TitlePageAdmin;
