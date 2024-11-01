import CarrierData from 'components/Carrier/CarrierData'
import React from 'react'

function Carrier() {
  return (
    <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <CarrierData/>
          </div>
        </div>
      </div>
  )
}

export default Carrier
