import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function ChangePassword({
  changepasswordModal,
  setChangePasswordModal,
}) {
  if (!changepasswordModal) return null;

  const { VITE_BACKEND_URL } = import.meta.env;
  const handleModale = () => {
    setChangePasswordModal(!changepasswordModal);
  };

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { userToken } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(newPassword + password + confirmPassword + email)
    axios
      .post(
        `${VITE_BACKEND_URL}/changepassword`,
        {
          password,
          email,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then(function handleResponse() {
        setChangePasswordModal(false);
      });
  };

  const btn =
    email === "" || password === "" || newPassword !== confirmPassword ? (
      <button
        type="submit"
        disabled
        className="text-white bg-gradient-to-r from-lime-400 to-cyan-500 font-medium rounded-lg text-m w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Send
      </button>
    ) : (
      <button
        type="submit"
        className="text-white bg-gradient-to-r from-lime-400 to-cyan-500 font-medium rounded-lg text-m w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Send
      </button>
    );

  return (
    <div
      className="
          fixed
          w-screen
          h-screen
          z-10
          bg-[#CADEDF]
          flex-grow
          flex
          flex-col
          px-10
          justify-center
          align-between"
    >
      <button
        type="button"
        tabIndex={0}
        onClick={handleModale}
        onKeyDown={handleModale}
      >
        X
      </button>

      <h5 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
        Change password
      </h5>
      <label
        htmlFor="floating_email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
      >
        Your mail
      </label>
      <input
        type="email"
        name="floating_email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder=" "
        required
      />
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group" />
          <div className="relative z-0 mb-6 w-full group" />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label
            htmlFor="floating_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
          >
            Current password
          </label>
          <input
            type="password"
            name="floating_current_password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=" "
            required
          />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label
            htmlFor="floating_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
          >
            New password
          </label>
          <input
            type="password"
            name="floating_password"
            id="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=" "
            required
          />
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label
            htmlFor="floating_repeat_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
          >
            Confirm New password
          </label>
          <input
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=" "
            required
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6" />
        {btn}
      </form>
      <button
        type="button"
        className="text-sm mt-10 font-medium text-cyan-500 dark:text-gray-300 text-center"
      >
        Back Home
      </button>
    </div>
  );
}
