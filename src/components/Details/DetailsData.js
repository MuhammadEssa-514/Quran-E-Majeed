import React, { useState } from 'react';
import picc from '..//../assets/img/logo.png'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function DetailsData() {
  const [formData, setFormData] = useState({
    duration: '',
    classes: '',
    days: '',
    startDay: '',
    schedule: [
      { day: '', from: '' },
    ],
    comment: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleScheduleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSchedule = [...formData.schedule];
    updatedSchedule[index][name] = value;
    setFormData((prevData) => ({ ...prevData, schedule: updatedSchedule }));
  };

  const addScheduleEntry = () => {
    setFormData((prevData) => ({
      ...prevData,
      schedule: [...prevData.schedule, { day: '', from: '' }],
    }));
  };

  const removeScheduleEntry = (index) => {
    const updatedSchedule = formData.schedule.filter((_, i) => i !== index);
    setFormData((prevData) => ({ ...prevData, schedule: updatedSchedule }));
  };

  return (
    <div style={{maxwidth:"30%",padding:"40px"}} className=" p-6 bg-yellow-500 shadow-md rounded-lg max-w-2xl mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
      <div>
        <img
          src={picc}
          alt="Image description"
          height="200px"
          width="200px"
         />
      </div>

      <div>
        <h1>title</h1>
        <p>description  description descrption description descriptiondescriptiondescription</p>
      </div>

      </div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className=" font-bold text-gray-800">Quran for Kids</h1>
        </div>
        <div className="">
          
        {/* <button className="bg-transparent border-none outline-none bg-blueGray-800 text-yellow-500 px-4 py-2 rounded">
      <IoMdArrowRoundBack />
        </button> */}

<Link to="/admin/courses">

      <div>
      <button className="bg-transparent border-none outline-none bg-blueGray-800 text-yellow-500 px-4 py-2 rounded">
      <IoMdArrowRoundBack />
        </button>
      </div>

        </Link> 
        </div>
      </div>
      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Enroll Course</h2>
        <p className="text-gray-600 mb-4">
          Let your children start their learning journey <strong>NOW</strong>, you'll get <span className="text-orange-500">TWO FREE Trial</span> classes.
        </p>
        <div className="space-y-4">
          <div className="block md:flex gap-4">
            <div className='w-full p-2'>
              <label className=" text-gray-600 mb-1">Class Duration</label>
              <select
         
                name="duration"
                className="w-full border-gray-300 rounded px-3 py-2"
                value={formData.duration}
                onChange={handleInputChange}
              >
                <option value="">Choose Class Duration</option>
                <option value="30 min">30 Minutes</option>
                <option value="1 hour">1 Hour</option>
              </select>
            </div>
            <div className='w-full p-2'>
              <label className=" text-gray-600 mb-1">Classes / Week</label>
              <select
                name="classes"
                className="w-full border-gray-300 rounded px-3 py-2"
                value={formData.classes}
                onChange={handleInputChange}
              >
                <option value="">How Many Classes Weekly</option>
                <option value="3">3 Classes</option>
                <option value="5">5 Classes</option>
              </select>
            </div>
          </div>

          <div className="md:flex gap-4">
            <div className='w-full p-2'>
              <label className="block text-gray-600 mb-1">Preferred Days</label>
              <select
                name="days"
                className="w-full border-gray-300 rounded px-3 py-2"
                value={formData.days}
                onChange={handleInputChange}
              >
                <option value="">Preferred Days</option>
                <option value="Monday-Wednesday">Monday to Wednesday</option>
                <option value="Friday-Sunday">Friday to Sunday</option>
              </select>
            </div>
            <div className='w-full p-2'>
              <label className="block text-gray-600 mb-1">Start Day</label>
              <input
                type="date"
                name="startDay"
                className="w-full border-gray-300 rounded px-3 py-2"
                value={formData.startDay}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Schedule Section */}
          <div >
            <h3 className="font-semibold text-gray-600 mb-2">Schedule (Provide us your preferred schedule)</h3>
            <p className="text-sm text-gray-500 mb-4">
              We suggest setting <strong>fixed times</strong> as this will help us arrange your classes as soon as possible. 
            </p>
            {formData.schedule.map((scheduleItem, index) => (
              <div key={index} className="md:flex gap-4 mb-4">
                <div className='w-full p-2'>
                  <label className="block text-gray-600 mb-1">Day</label>
                  <select
                    name="day"
                    className="w-full border-gray-300 rounded px-3 py-2"
                    value={scheduleItem.day}
                    onChange={(e) => handleScheduleChange(index, e)}
                  >
                    <option value="">Choose Class Day</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                  </select>
                </div>
                <div className='w-full p-2'>
                  <label className="block text-gray-600 mb-1">From Time</label>
                  <input
                    type="time"
                    name="from"
                    className="w-full border-gray-300 rounded px-3 py-2"
                    value={scheduleItem.from}
                    onChange={(e) => handleScheduleChange(index, e)}
                  />
                </div>
                {index > 0 && (
                  <div className="col-span-2 flex items-center">
                    <button
                      className="text-red-500"
                      onClick={() => removeScheduleEntry(index)}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
            <button
              className="text-blue-500"
              onClick={addScheduleEntry}
            >
              + ADDITIONAL TIME ENTRY
            </button>
          </div>

          {/* Comment Section */}
          <div>
            <label className="block text-gray-600 mb-1">Comment (optional)</label>
            <textarea
              name="comment"
              className="w-full border-gray-300 rounded px-3 py-2"
              value={formData.comment}
              onChange={handleInputChange}
              placeholder="Leave us a message (optional)"
            />
          </div>

          {/* Enroll Button */}
          <button className="w-full hover:bg-yellow-400 bg-blueGray-800  text-white font-semibold py-2 rounded mt-4">
            ENROLL NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsData;
