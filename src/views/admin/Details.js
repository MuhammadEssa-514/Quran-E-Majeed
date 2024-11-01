import React from 'react'
import DetailsData from 'components/Details/DetailsData'

function Details() {
  return (
    <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-blueGray-800 w-full mb-6 shadow-lg rounded">
            <DetailsData/>
          </div>
        </div>
      </div>
  )
}

export default Details