import * as React from "react";
import './style.css';
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

// Reusable Input component
const InputField = ({ label, type, id, autoComplete, className }) => (
  <div>
    <label htmlFor={id} className="block font-satoshi text-sm font-semibold leading-6 text-yellow-500 pb-2">
      {label}
    </label>
    <div className="bg-black text-white rounded-lg">
      <input
        type={type}
        name={id}
        id={id}
        autoComplete={autoComplete}
        className={`w-full text-white bg-black rounded-lg py-2 px-2 border ${className}`}
      />
    </div>
  </div>
);

const TextAreaField = ({ label, id, rows, className }) => (
  <div className="sm:col-span-2">
    <label htmlFor={id} className="block font-satoshi text-sm font-semibold leading-6 text-yellow-500 py-2">
      {label}
    </label>
    <div className="w-full bg-gradient-to-r from-[#28FFBF] to-[#FA00FF] rounded-lg p-[2px]">
      <div className="bg-black text-white rounded-lg">
        <textarea
          name={id}
          id={id}
          rows={rows}
          className={`w-full text-white bg-black rounded-lg py-2 px-2 border ${className}`}
          defaultValue=""
        />
      </div>
    </div>
  </div>
);

export default function ContactData() {
  const contactDetails = {
    email: "admin@vapemeup.ph",
    phone: "+63 945 408 3993",
    office: "1630 Taguig, Philippines"
  };

  return (
    <div>
      <div className="background flex items-center justify-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white font-satoshi">
          Contact Us
        </h1>
      </div>

      <div className="bg-black relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:pt-8 lg:pb-48">
        <div className="mx-auto max-w-[830px]">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white font-satoshi">
              Get In Touch With Us
            </h2>
            <p className="mt-6 text-lg text-center text-yellow-500 font-satoshi">
              For more information about our product services, please feel free to drop us an email. Our staff will always be there to help you out. Do not hesitate!
            </p>
          </div>
        </div>

        <div className="mx-auto md:flex max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-4 pt-6 sm:pt-12 lg:static lg:px-8 lg:py-12">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-white font-satoshi">
                Other Ways to Connect
              </h2>
              <p className="text-lg max-w-[380px] text-yellow-500 font-satoshi">
                We&apos;d love to hear from you. Our friendly team is always here to chat.
              </p>
              <dl className="mt-6 space-y-4 text-base leading-7 text-gray-300">
                <div className="flex gap-4 text-gray-300">
                  <dt className="flex-none">
                    <MdEmail className="text-2xl text-white" />
                  </dt>
                  <dd className="pb-4">
                    <h3 className="text-xl text-white font-satoshi">Reach Us on Email</h3>
                    <p className="font-satoshi text-yellow-500">Our friendly team is here to help.</p>
                    <p className="font-satoshi text-yellow-500">{contactDetails.email}</p>
                  </dd>
                </div>
                <div className="flex gap-4 text-gray-300">
                  <dt className="flex-none">
                    <FaPhoneAlt className="text-2xl text-white" />
                  </dt>
                  <dd className="text-yellow-500 pb-4">
                    <h3 className="text-xl text-white font-satoshi">Phone</h3>
                    <p className="font-satoshi">Mon-Fri from 8am to 5pm.</p>
                    <p className="font-satoshi">{contactDetails.phone}</p>
                  </dd>
                </div>
                <div className="flex gap-4 text-gray-300">
                  <dt className="flex-none">
                    <IoLocation className="text-2xl text-white" />
                  </dt>
                  <dd>
                    <h3 className="text-xl text-white font-satoshi">Office</h3>
                    <div className="text-yellow-500">
                      <p className="font-satoshi">Come say hello at our office.</p>
                      <p className="mt-2 font-satoshi">{contactDetails.office}</p>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <form action="#" method="POST" className="px-6 pb-4 pt-6 sm:pt-12 lg:static lg:px-8 lg:py-12">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white font-satoshi">
                Love to hear from you, Get in touch 👋
              </h2>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-8">
                <InputField label="Your Name" type="text" id="name " className={`mb-2`} autoComplete="name" />
                <InputField label="Email" type="email" id="email" className={`mb-2`}  autoComplete="email" />
                <InputField label="Phone No." type="text" id="phone-number" className={`mb-2`} autoComplete="tel" />
                <InputField label="What you are interested in" type="text" className={`mb-2`} id="interest" />
                <TextAreaField label="Message" id="message" rows={4} />
              </div>
              <div className="mt-5 flex ">
                <button className="bg-yellow-500 hover:bg-yellow-400 p-2 rounded-lg text-white font-semibold">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
