import HistoryData from 'components/History/HistoryData'
import React from 'react'

function History() {
  return (
    <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <HistoryData />     
          </div>
        </div>
      </div>
  )
}

export default History
