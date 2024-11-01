import PapersBoysData from 'components/PapersBoys/PapersBoysData'
import React from 'react'

function PapersBoys() {
  return (
    <div className="flex flex-wrap">
    <div className="w-full px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <PapersBoysData/>
      </div>
    </div>
  </div>
  )
}

export default PapersBoys
