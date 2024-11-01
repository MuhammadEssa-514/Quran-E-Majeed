import React, { useState } from "react";

export default function CardSettings() {
  const userData = [
    { label: "Username", name: "username", type: "text", defaultValue: "lucky.jesse" },
    { label: "Email address", name: "email", type: "email", defaultValue: "jesse@example.com" },
    { label: "First Name", name: "firstName", type: "text", defaultValue: "Lucky" },
    { label: "Last Name", name: "lastName", type: "text", defaultValue: "Jesse" },
    { label: "Address", name: "address", type: "text", defaultValue: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" },
    { label: "City", name: "city", type: "text", defaultValue: "New York" },
    { label: "Country", name: "country", type: "text", defaultValue: "United States" },
    { label: "Postal Code", name: "postalCode", type: "text", defaultValue: "Postal Code" },
    { label: "About Me", name: "aboutMe", type: "textarea", defaultValue: "A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source." }
  ];

  const [formData, setFormData] = useState(
    userData.reduce((acc, field) => {
      acc[field.name] = field.defaultValue;
      return acc;
    }, {})
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Settings
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              {userData.map((field, index) => (
                <div key={index} className={`w-full ${field.name === "aboutMe" ? "lg:w-12/12" : "lg:w-6/12"} px-4`}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor={field.name}
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

        
          </form>
        </div>
      </div>
    </>
  );
}
