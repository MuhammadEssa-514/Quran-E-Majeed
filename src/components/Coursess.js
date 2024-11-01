import React, { useState } from 'react';
import DetailsData from '..//components/Details/DetailsData';

const courses = [
  {
    id: 1,
    title: "Quran for Kids",
    description: "This course is specially designed for kids to learn Quran with Tajweed.",
    image: "quran-for-kids-image-url", // Replace with your actual image URL
    slug: "quran-for-kids"
  },
  {
    id: 2,
    title: "Advanced Quran Studies",
    description: "Advanced course for learning the Quran with in-depth studies.",
    image: "advanced-quran-studies-image-url", // Replace with your actual image URL
    slug: "advanced-quran-studies"
  },
  // Add more courses as needed
];

function Coursess() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="flex">
      <div className="w-1/3">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="cursor-pointer p-4 border-b" 
            onClick={() => handleCourseClick(course)}
          >
            <h2 className="text-lg font-bold">{course.title}</h2>
            <p>{course.slug}</p>
          </div>
        ))}
      </div> 
      
      <div className="w-2/3">
        <DetailsData selectedCourse={selectedCourse} />
      </div>
    </div>
  );
}

export default Coursess;
