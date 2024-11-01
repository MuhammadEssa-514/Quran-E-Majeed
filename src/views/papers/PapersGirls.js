import PapersGirlsData from 'components/PapersGirls/PapersGirlsData'
import React from 'react'

function PapersGirls() {
  return (
    <div className="flex flex-wrap">
    <div className="w-full px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <PapersGirlsData/>
      </div>
    </div>
  </div>
  )
}

export default PapersGirls
