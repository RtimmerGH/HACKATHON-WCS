import React from "react";
// import { AuthContext } from "../context/AuthContext";

export default function Header({ setLoginModal, loginModal }) {
  const handleChange = () => {
    setLoginModal(!loginModal);
  };

  return (
    <div>
      <button type="button" onClick={handleChange}>
        Log-in
      </button>
    </div>
  );
}
