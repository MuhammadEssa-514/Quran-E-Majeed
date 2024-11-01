import React from 'react';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { GiSplitCross } from "react-icons/gi";

const plansData = [
  {
    title: "Free Trials",
    description: "Talimat islam offer basics courses for beginners",
    price: "1400",
    button: "Buy Plan",
    details: [
      "5 products",
      "Up to 500 subscribers",
      "Basic analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ]
  },
  {
    title: "Basic",
    description: "Talimat islam offer basics courses for beginners",
    price: "1200",
    button: "Buy Plan",
    details: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
      "Custom reporting tools",
    ]
  },
  {
    title: "Advance",
    description: "Talimat islam offer basics courses for beginners",
    price: "313",
    button: "Buy Plan",
    details: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ]
  },
];

function PlansData() {
  return (
    <div className='bg-black'>
      <h1 className='text-center text-5xl p-5 font-bold text-yellow-500'>Our <span className='text-white'>Pricing</span> Plans</h1>
      <p className='text-center text-white py-5'>
        lorem Marketing automations Marketing automations Marketing automations Marketing automations Marketing automationsMarketing automationsMarketing automationsMarketing automationsMarketing automationsMarketing automationsMarketing automations
      </p>
      <div className="flex flex-wrap">
        {plansData.map((plan, index) => (
          <div key={index} className="w-full lg:w-4/12 px-4 mt-6 lg:mt-0">
            <div className="shadow-lg rounded-lg p-5 text-white bg-blueGray-800 border border-yellow-500">
              <h2 className="p-2 text-2xl font-semibold mt-4 mb-4 text-yellow-500">{plan.title}</h2>
              <p className="p-2 text-sm mb-4">{plan.description}</p>
              <p className="p-2 text-4xl font-semibold mb-4">${plan.price}</p>
              <button className='bg-yellow-500 hover:bg-yellow-400 w-full p-2 font-bold'>{plan.button}</button>
              
              {plan.details.map((detail, idx) => (
                <div key={idx} className='dtailDescription flex items-center'>
                  {/* now fr 1st card */}
                  {index === 0 ? (
                    detail === "5 products" || detail === "Up to 500 subscribers" ? (
                      <IoCheckmarkDoneSharp className='p-2 text-4xl text-yellow-500 font-semibold my-4' />
                    ) : (
                      <GiSplitCross className='p-2 text-4xl text-red-500 font-semibold my-4' />
                    )
                  ) : index === 1 ? (
                    // now fr 2nd crd
                    detail === "Marketing automations" || detail === "Custom reporting tools" ? (
                      <GiSplitCross className='p-2 text-4xl text-red-500 font-semibold my-4' />
                    ) : (
                      <IoCheckmarkDoneSharp className='p-2 text-4xl text-yellow-500 font-semibold my-4' />
                    )
                  ) : (
                    <IoCheckmarkDoneSharp className='p-2 text-4xl text-yellow-500 font-semibold my-4' />
                  )}
                  <p>{detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlansData;
