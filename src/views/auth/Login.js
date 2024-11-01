import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted with", { email, password, rememberMe });
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-yellow-500 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="mb-3">
                  <h1 className="text-black text-2xl font-bold">
                    Welcome Back!{" "}
                  </h1>
                  <h4>Login to portal</h4>
                </div>
                
                <div>
                 <div>
                  
                 </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleLogin}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <div className=" border-2 relative flex items-center rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 bg-white  ">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full  py-3 border-none focus:outline-none focus:ring rounded placeholder-blueGray-300 text-blueGray-600 bg-transparent"
                        placeholder="Enter Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <span
                        className=" absolute right-0 flex items-center cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <BiSolidHide className="text-gray-500" />
                        ) : (
                          <BiSolidShow className="text-gray-500" />
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <label className="flex items-center text-blueGray-600">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <span className="ml-2">Remember Me</span>
                    </label>
                    <a href="#" className="text-blueGray-600 hover:underline">
                      Forgot Password?
                    </a>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="w-full mt-4 text-center">
                    <Link to="/auth/register" className="text-blueGray-800">
                      <small>Don't have an account ? <span className="text-white">SING UP</span> </small>
                    </Link>
                  </div>
                
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative"></div>
          </div>
        </div>
      </div>
    </>
  );
}
