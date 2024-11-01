import PaperData from 'components/Paper/PaperData'
import React from 'react'

function Papers() {
  return (
    <div className="flex flex-wrap">
    <div className="w-full px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <PaperData/>
      </div>
    </div>
  </div>
  )
}

export default Papers
