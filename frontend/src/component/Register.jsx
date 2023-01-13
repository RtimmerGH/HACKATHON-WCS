import React, { useState } from "react";
import axios from "axios";

export default function Register({ registerModal, setRegisterModal }) {
  if (!registerModal) return null;

  const { VITE_BACKEND_URL } = import.meta.env;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${VITE_BACKEND_URL}/users`,
        {
          email,
          password,
          firstname: firstName,
          lastname,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function handleResponse() {
        setRegisterModal(false);
      });
  };

  const btn =
    email === "" ||
    password === "" ||
    password !== confirmPassword ||
    firstName === "" ||
    lastname === "" ? (
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
      <div className="mx-6 lg:mx-48">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
          Create an account
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <label
                htmlFor="floating_last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
              >
                Nom
              </label>
              <input
                type="text"
                name="floating_last_name"
                id="name"
                defaultValue={lastname}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" "
                required
              />
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <label
                htmlFor="floating_first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
              >
                Prénom
              </label>
              <input
                type="text"
                name="floating_first_name"
                id="first_name"
                defaultValue={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" "
                required
              />
            </div>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <label
              htmlFor="floating_email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
            >
              Adresse e-mail
            </label>
            <input
              type="email"
              name="floating_email"
              id="email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
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
              Mot de passe
            </label>
            <input
              type="password"
              name="floating_password"
              id="password"
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
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
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              name="repeat_password"
              id="floating_repeat_password"
              defaultValue={confirmPassword}
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
          onClick={() => {
            setRegisterModal(false);
          }}
          className="text-sm mt-10 font-medium text-cyan-500 dark:text-gray-300 text-center"
        >
          Back Home
        </button>
      </div>
    </div>
  );
}
