import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Register({ formTitle, formDescription, handleSubmit }) {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-yellow-500 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="mb-3">
                  <h1 className="text-black text-2xl font-bold">
                    {formTitle || "Create New Account"}
                  </h1>
                  <p className="text-white">
                    {formDescription ||
                      "Create a new account now and get TWO FREE trials immediately."}
                  </p>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit}>
                  <div className="flex gap-4 w-full mb-3">
                    <div className="w-full">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="first-name"
                      >
                        Student First Name
                      </label>
                      <input
                        type="text"
                        className="border-0 p-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Student First Name"
                        name="firstName"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="last-name"
                      >
                        Student Last Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Student Last Name"
                        name="lastName"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </div>

                  <div className="relative w-full flex gap-4 mb-3">
                    <div className="w-full">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="border-0 p-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                        name="password"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="confirm-password"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-4 mb-3">
                    <div className="w-full">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="dob"
                      >
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="border-0 p-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="dob"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="gender"
                      >
                        Gender
                      </label>
                      <select
                        name="gender"
                        className="border-0 p-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        required
                      >
                        <option value="" className="w-full">
                          Select Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-3">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        required
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>

                  <div className="text-center pt-4">
                    <Link to="/auth/login" className="text-blueGray-800 ">
                      <small>
                        Already have an account?{" "}
                        <span className="text-white">SIGN IN</span>
                      </small>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
