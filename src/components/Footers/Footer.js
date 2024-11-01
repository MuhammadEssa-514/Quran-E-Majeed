import React from "react";
import logo from "../../assets/img/main-logo.png";

// import { IoMdCall } from "react-icons/io";
// import { FaFacebook, FaInstagram } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-yellow-500 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <div>
                <img src={logo} alt="logo" className="h-20 " />
              </div>
              <h4 className="text-3xl font-semibold">Taleemat e Ahlulbayt</h4>
              
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              {/* <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaFacebook/>
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaFacebook />
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div> */}
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="md:flex block  items-top mb-6">
                {/* <div className="mx-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Contact Our Institute
                  </span>
                  <div className="flex items-center gap-10 text-blueGray-600 hover:text-blueGray-800 font-semibold  pb-2 text-sm text-center">
                    <div>
                      <IoMdCall />
                    </div>
                    <div>
                      <h4>Call Anytime / Whats App</h4>
                      <p> + 92 339 6883 334</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-10 text-blueGray-600 hover:text-blueGray-800 font-semibold  pb-2 text-sm ">
                    <FaFacebook />
                    <h4>Facebook</h4>
                  </div>
                  <div className="flex items-center gap-10 text-blueGray-600 hover:text-blueGray-800 font-semibold  pb-2 text-sm">
                    <FaInstagram />
                    <h4>Instagram EDQ</h4>
                  </div>
                  <div className="flex item-center gap-10 text-blueGray-600 hover:text-blueGray-800 font-semibold pb-2 text-sm">
                    <div>
                      <IoMdMail />
                    </div>
                    <div>
                      {" "}
                      <h4>Send Email</h4>
                      <p> support@edarulquran.com</p>
                    </div>
                  </div>
                  

                  <div></div>
                </div> */}
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation?ref=nr-footer"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com?ref=nr-footer"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=nr-footer"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=nr-footer"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=nr-footer"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=nr-footer"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-blueGray-300" />
          <div className="flex  bg-blueGray-800 p-2">
            <div className="w-full px-4 mx-auto text-center">
              <div className="text-sm  text-white font-semibold py-1">
                Copyright © {new Date().getFullYear()} Talimaat e Ahlibayt
                by{" "}
                <a
                  href="https://www.talimat e Ahlibayt"
                  className="text-blueGray-200 hover:text-blueGray-300"
                >
                  TechEver Solution's
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
