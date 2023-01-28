import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function Login({
  loginModal,
  setLoginModal,
  registerModal,
  setRegisterModal,
}) {
  if (!loginModal) return null;

  const handleChange = () => {
    setLoginModal(false);
    setRegisterModal(!registerModal);
  };

  const {
    setUserTokenCookie,
    setUserFirstName,
    setUserLastName,
    setUserEmail,
    setUserRole,
    setUserId,
  } = useContext(AuthContext);

  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const login = { email, password };
      const { VITE_BACKEND_URL } = import.meta.env;
      const response = await axios.post(`${VITE_BACKEND_URL}/login`, login);

      if (response.data.token) {
        setUserTokenCookie(response.data.token);
        setUserRole(response.data.user.admin);
        setUserFirstName(response.data.user.firstname);
        setUserLastName(response.data.user.lastname);
        setUserEmail(response.data.user.email);
        setUserId(response.data.user.id);
        setLoginModal(false);
      }
    } catch (error) {
      console.error("user not found");
    }
  };

  return (
    <div
      className="
        fixed
        w-screen
        h-screen
        z-40
        bg-[#CADEDF]
        flex-grow
        flex
        flex-col
        px-10
        justify-center
        align-between"
    >
      <form onSubmit={handleSubmit} className="space-y-6 mx-4 lg:mx-48">
        <h5 className="flex justify-center text-xl font-medium text-gray-900 dark:text-white mx-auto">
          Sign in to our platform
        </h5>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            defaultValue={email}
            onChange={(e) => setemail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
          Not registered?{" "}
          <div
            onClick={handleChange}
            onKeyDown={handleChange}
            role="button"
            tabIndex={0}
            className="text-cyan-500 hover:underline dark:text-blue-500"
          >
            Create account
          </div>
        </div>
        <button
          type="submit"
          className="flex text-white bg-gradient-to-r from-lime-400 to-cyan-500 font-medium rounded-lg text-m sm:w-auto px-5 py-2.5
          mx-auto"
        >
          Login to your account
        </button>
      </form>
      <button
        type="button"
        onClick={() => {
          setLoginModal(false);
        }}
        className="text-sm mt-10 font-medium text-cyan-500 dark:text-gray-300 text-center"
      >
        Back Home
      </button>
    </div>
  );
}
