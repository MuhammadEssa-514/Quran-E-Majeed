import React, { useState } from 'react';
import imagee from "..//..//assets/img/profile-imge.jpg";

const events = [
  {
        id: 1,
        day: 'Monday',
        time: '10:00 - 10:30',
        title: 'Oak Barrel Road Tastings',
        speaker: 'Chen Danny',
        description: 'Join us for an exclusive tasting paired with local cheese and snacks.',
        image: imagee,
      },
      {
        id: 2,
        day: 'Monday',
        time: '10:30 - 11:00',
        title: 'Presentation of the course and the team',
        speaker: 'Jane Doe',
        description: 'Meet the team and get an overview of the course.',
        image: imagee,
      },
      {
        id: 3,
        day: 'Monday',
        time: '11:00 - 11:30',
        title: 'Quran Recitation Event',
        speaker: 'Muhammad Ali',
        description: 'Listen to a beautiful recitation of the Holy Quran.',
        image: imagee,
      },
      {
        id: 4,
        day: 'Tuesday',
        time: '11:30 - 12:00',
        title: 'Tafseer Lecture',
        speaker: 'Ahmad Khan',
        description: 'An in-depth explanation of selected verses from the Quran.',
        image: imagee,
      },
      {
        id: 5,
        day: 'Tuesday',
        time: '12:00 - 12:30',
        title: 'Interactive Q&A Session',
        speaker: 'Sara Malik',
        description: 'Ask your questions about the Quran and receive detailed answers.',
        image: imagee,
      },
      {
        id: 6,
        day: 'Wednesday',
        time: '12:00 - 12:30',
        title: 'Interactive Q&A Session',
        speaker: 'Sara Malik',
        description: 'Ask your questions about the Quran and receive detailed answers.',
        image: imagee,
      },
      {
        id: 7,
        day: 'Wednesday',
        time: '12:00 - 12:30',
        title: 'Interactive Q&A Session',
        speaker: 'Sara Malik',
        description: 'Ask your questions about the Quran and receive detailed answers.',
        image: imagee,
      },
      {
        id: 8,
        day: 'Wednesday',
        time: '12:00 - 12:30',
        title: 'Interactive Q&A Session',
        speaker: 'Sara Malik',
        description: 'Ask your questions about the Quran and receive detailed answers.',
        image: imagee,
      },
      {
        id: 9,
        day: 'Thursday',
        time: '12:00 - 12:30',
        title: 'Interactive Q&A Session',
        speaker: 'Sara Malik',
        description: 'Ask your questions about the Quran and receive detailed answers.',
        image: imagee,
      },
      {
        id: 19,
        day: 'Thursday',
        time: '12:00 - 12:30',
        title: 'Interactive Q&A Session',
        speaker: 'Sara Malik',
        description: 'Ask your questions about the Quran and receive detailed answers.',
        image: imagee,
      },
      {
        id: 11,
        day: 'Thursday',
        time: '12:00 - 12:30',
        title: 'Interactive Q&A Session',
        speaker: 'Sara Malik',
        description: 'Ask your questions about the Quran and receive detailed answers.',
        image: imagee,
      },
      {
        id: 12,
        day: 'Sunday',
        time: 'off',
      
       
      },
];

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const EventComponent = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');

  return (
    <div  style={{width:"100%"}} className=" mx-auto p-4 bg-blueGray-800 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-4 py-6 text-center">Our <span className="text-yellow-500">Events</span></h1>

      {/* Event Days Tabs */}
      <div className="flex flex-wrap justify-center space-x-2 mb-6 overflow-auto">
        {daysOfWeek.map((day) => (
          <button
            key={day}
            className={`py-2 px-4 mb-2 rounded-full ${
              selectedDay === day ? 'bg-yellow-500 hover:bg-yellow-400 text-white' : 'bg-gray-200 text-white'
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Events List */}
      <div className="space-y-6" >
        {events
          .filter(event => event.day === selectedDay)
          .slice(0, 3)
          .map(event => (
            <div key={event.id} className=" bg-blue-gray-800 shadow-md rounded-lg p-4 flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
              {/* Event Time */}
              <div className="w-full md:w-1/4 text-yellow-500 md:text-left">
                {event.time}
              </div>
              {/* Event Details */}
              <div className="w-full md:w-3/4">
                <h2 className="text-xl font-semibold text-yellow-500">{event.title}</h2>
                <div className="flex items-center space-x-4 mt-2">
                  <img
                    src={event.image}
                    alt={event.speaker}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <p className="text-yellow-500 font-medium">{event.speaker}</p>
                </div>
                <p className="text-yellow-500 mt-2 mb-5">{event.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EventComponent;
