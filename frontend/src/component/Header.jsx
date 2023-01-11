import React from "react";
// import { AuthContext } from "../context/AuthContext";

export default function Header({ setLoginModal, loginModal }) {
  const handleChange = () => {
    setLoginModal(!loginModal);
  };

  return (
    <div className="flex" >
      <img src ="./image/logo.svg"/>
      <h1>Easy Move</h1>
      <button type="button" onClick={handleChange}>
        Log-in
      </button>
    </div>
  );
}
