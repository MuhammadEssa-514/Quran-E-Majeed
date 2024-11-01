import React, { useState, useEffect } from 'react';
const BackgroundSlider = () => {
  // Array of background image URLs
  const images = [
    'https://img.freepik.com/free-photo/top-view-islamic-new-year-concept_23-2148611689.jpg?t=st=1726237770~exp=1726241370~hmac=54a2db9c5cb9a951a8b25bf7204cdcfa2e96ad002386a8dfc877f3d850ca3539&w=740',
    'https://img.freepik.com/premium-photo/book-with-book-titled-bible_1313146-25303.jpg?w=900',
    'https://img.freepik.com/premium-photo/illuminated-quran-stand-sacred-book-display_1036975-212608.jpg?w=900',
  ];
  // State to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState(0);
  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
 
  // Auto-slide every 5 seconds (optional)
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);
  return (
    <div
      className="w-full h-500-px bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
   
    </div>
  );
};
export default BackgroundSlider;