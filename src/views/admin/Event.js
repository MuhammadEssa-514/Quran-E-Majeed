import EventData from 'components/Event/EventData'
import React from 'react'

function Event() {
  return (
    <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <EventData/>
          </div>
        </div>
      </div>
  )
}

export default Event
