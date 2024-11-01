// import React, { useState } from 'react';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// import quranImg1 from '../../assets/img/courses/yassaranal.png';
// import quranImg2 from '../../assets/img/courses/quran1.png';
// import quranImg3 from '../../assets/img/courses/quran2.png';
// import quranImg4 from '../../assets/img/courses/quran3.png';
// import quranImg5 from '../../assets/img/courses/qarat.png';
// import quranImg6 from '../../assets/img/courses/quran4.png';
// import quranImg7 from '../../assets/img/courses/tafseer.png';
// import quranImg8 from '../../assets/img/courses/balaga.png';
// import quranImg9 from '../../assets/img/courses/sajjidia.png';
// import quranImg10 from '../../assets/img/courses/shia fiq.png';
// // import quranImg11 from '../../assets/img/quran/qur';
// import quranImg12 from '../../assets/img/courses/namaz.png';
// import quranImg13 from '../../assets/img/courses/dua.png';
// import quranImg14 from '../../assets/img/courses/hadis.png';
// import quranImg15 from '../../assets/img/courses/tarjuma.png';

// const data = [
//   { id: 1, name: 'Yassarnal Quran Qaida', discription: "The Yassarnal Quran Qaida is a beginner's guide designed to teach the basics of reading the Qur'an in Arabic. The word Yassarnal means made easy indicating its purpose of simplifying the learning process.", image: quranImg1 },
//   { id: 2, name: 'Quran with Tajweed', discription: 'When it comes to recitation, Tajweed is the first step. Not only to improve reading the Holy Quran, but also to upgrade your Arabic.', image: quranImg2 },
//   { id: 3, name: 'Quran Reading', discription: 'The Quran is a source of guidance and enlightenment, and that reading and reciting it can bring numerous benefits to the individual.', image: quranImg3 },
//   { id: 4, name: 'Quran Memorization', discription: 'The memorization of the Quran is an integral part of Shia religious practice and is considered a noble and highly esteemed undertaking.', image: quranImg4 },
//   { id: 5, name: 'Qirat e Quran', discription: 'Qirat e Quran is a central aspect of Shia religious practice and is valued for its spiritual and transformative power.', image: quranImg5 },
//   { id: 6, name: 'Quran Interpretation', discription: 'The Quran is based on a deep reverence for the sacred text and a belief that its true meanings can only be understood through the guidance of the Prophet and his family members.', image: quranImg6 },
//   { id: 7, name: 'Quran With Tafseer', discription: 'The Quran with Tafseer refers to a version of the Quran that includes detailed explanations and commentaries on its verses and teachings.', image: quranImg7 },
//   { id: 8, name: 'Nehjul Balagha', discription: 'Nahj al-Balāghah; "The Path of Eloquence" is the best-known collection of sermons, letters, and sayings attributed to Ali ibn Abi Talib.', image: quranImg8 },
//   { id: 9, name: 'Saheefa e Sajjadiyah', discription: 'Saheefa e Sajjadiyah is a collection of supplications and prayers attributed to Imam Ali Zain al-Abidin (a.s).', image: quranImg9 },
//   { id: 10, name: 'Shia Islamic Fiqh/Laws', discription: 'Shia Fiqh is based on the teachings of the Ahlulbayt, or the family of the Prophet Muhammad, and is grounded in the principles of reason, morality, and justice.', image: quranImg10 },
//   { id: 11, name: 'Namaz', discription: 'Namaz is seen as an essential aspect of Shia Islamic practice and is valued for its ability to promote spiritual growth, moral development, and social responsibility.', image: quranImg12 },
//   { id: 12, name: 'Duas', discription: 'Duas are prayers asking for Gods guidance, blessings, and forgiveness, and are considered a means of establishing a direct connection with God.', image: quranImg13 },
//   { id: 13, name: 'Ahadees', discription: 'Ahadith, or sayings of the Prophet Muhammad and the Imams, are an important aspect of Shia Islamic practice according to Shia Fiqh.', image: quranImg14 },
//   { id: 14, name: 'Quran Translation', discription: 'We have designed translation of Quran Course for male and female students who want to learn to translate Quran with the help of experienced online Quran tutors.', image: quranImg15 },
// ];

// function CoursesData() {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Filtered courses based on the search term
//   const filteredCourses = data.filter((course) =>
//     course.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className='bg-black text-white container mx-auto'>
//      <div className='flex items-center justify-between '>
//   <div>
//   <h1 className='text-yellow-500 text-3xl text-center p-8 font-bold'>Courses</h1>

//   </div>
//       {/* Search Input */}
//       <div className="text-center px-3">
//         <input
//           type="text"
//           placeholder="Search for a course..."
//           className="py-3 w-1/3  text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-lg"

//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//   </div>

//       <ul className='grid grid-cols-3 gap-4'>
//         {filteredCourses.length > 0 ? (
//           filteredCourses.map((course) => (
//             <li key={course.id} className="mb-6 bg-blueGray-800 rounded-lg flex flex-col h-full">
//               {course.image && (
//                <img
//                src={course.image}
//                alt={course.name}
//                className="w-full h-48 object-cover mb-2 rounded-t-lg hover-zoom"
//              />
             
//               )}
//               <div className="flex-grow">
//                 <h2 className="text-2xl font-semibold p-4 text-yellow-500 ">
//                   {course.name}
//                 </h2>
//                 <p className="text-sm p-4">
//                   {course.discription}
//                 </p>
//               </div>
//               <Link to="/admin/details">
//               <button className="w-full bg-gold text-black hover: font-semibold p-2 rounded-lg mt-2  bg-yellow-500 hover:bg-yellow-400">
//                 Details
//               </button>
//               </Link>
//             </li>
//           ))
//         ) : (
//           <li className="text-center col-span-3 text-lg text-yellow-500">No courses found</li>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default CoursesData;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import course images
import quranImg1 from '../../assets/img/courses/yassaranal.png';
import quranImg2 from '../../assets/img/courses/quran1.png';
import quranImg3 from '../../assets/img/courses/quran2.png';
import quranImg4 from '../../assets/img/courses/quran3.png';
import quranImg5 from '../../assets/img/courses/qarat.png';
import quranImg6 from '../../assets/img/courses/quran4.png';
import quranImg7 from '../../assets/img/courses/tafseer.png';
import quranImg8 from '../../assets/img/courses/balaga.png';
import quranImg9 from '../../assets/img/courses/sajjidia.png';
import quranImg10 from '../../assets/img/courses/shia fiq.png';
import quranImg12 from '../../assets/img/courses/namaz.png';
import quranImg13 from '../../assets/img/courses/dua.png';
import quranImg14 from '../../assets/img/courses/hadis.png';
import quranImg15 from '../../assets/img/courses/tarjuma.png';

const data = [
  { id: 1, name: 'Yassarnal Quran Qaida', discription: "The Yassarnal Quran Qaida is a beginner's guide designed to teach the basics of reading the Qur'an in Arabic.", image: quranImg1 },
  { id: 2, name: 'Quran with Tajweed', discription: 'When it comes to recitation, Tajweed is the first step.', image: quranImg2 },
  { id: 3, name: 'Quran Reading', discription: 'The Quran is a source of guidance and enlightenment.', image: quranImg3 },
  { id: 4, name: 'Quran Memorization', discription: 'The memorization of the Quran is an integral part of Shia religious practice.', image: quranImg4 },
  { id: 5, name: 'Qirat e Quran', discription: 'Qirat e Quran is a central aspect of Shia religious practice.', image: quranImg5 },
  { id: 6, name: 'Quran Interpretation', discription: 'Understanding the Quran through the guidance of the Prophet.', image: quranImg6 },
  { id: 7, name: 'Quran With Tafseer', discription: 'Includes detailed explanations and commentaries.', image: quranImg7 },
  { id: 8, name: 'Nehjul Balagha', discription: 'A collection of sayings attributed to Ali ibn Abi Talib.', image: quranImg8 },
  { id: 9, name: 'Saheefa e Sajjadiyah', discription: 'A collection of supplications attributed to Imam Ali Zain al-Abidin.', image: quranImg9 },
  { id: 10, name: 'Shia Islamic Fiqh/Laws', discription: 'Based on the teachings of the Ahlulbayt.', image: quranImg10 },
  { id: 11, name: 'Namaz', discription: 'Promotes spiritual growth and moral development.', image: quranImg12 },
  { id: 12, name: 'Duas', discription: 'Prayers for guidance, blessings, and forgiveness.', image: quranImg13 },
  { id: 13, name: 'Ahadees', discription: 'Sayings of the Prophet Muhammad and the Imams.', image: quranImg14 },
  { id: 14, name: 'Quran Translation', discription: 'For students wanting to learn Quran translation.', image: quranImg15 },
  { id: 15, name: 'Quran Memories', discription: 'For students wanting to learn Quran translation.', image: quranImg12 },
];

function CoursesData() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3; // Always show 3 cards

  // Function to update cardsToShow based on window size
  const updateCardsToShow = () => {
    if (window.innerWidth >= 1024) {
      return 3; // Large screens
    } else if (window.innerWidth >= 768) {
      return 2; // Medium screens
    } else {
      return 1; // Small screens
    }
  };

  // Filtered courses based on the search term
  const filteredCourses = data.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle Next button clicks
  const handleNext = () => {
    const newIndex = (currentIndex + cardsToShow) % filteredCourses.length;
    setCurrentIndex(newIndex);
  };

  // Handle Previous button clicks
  const handlePrev = () => {
    const newIndex = (currentIndex - cardsToShow + filteredCourses.length) % filteredCourses.length;
    setCurrentIndex(newIndex);
  };
  

  return (
    <div className='bg-black text-white container mx-auto p-5'>
      <div className='flex items-center justify-between mb-5'>
        <h1 className='text-yellow-500 text-3xl font-bold'>Courses</h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for a course..."
          className="py-3 w-1/3 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="">
        <div className='flex gap-4 justify-end pb-4'>
          <button
            className="bg-yellow-500 text-black p-2 rounded-lg"
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </button>

          <button
            className="bg-yellow-500 text-black p-2 rounded-lg"
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
        </div>

        <ul className='flex gap-4 overflow-hidden'>
          {/* Show three cards */}
          {filteredCourses.slice(currentIndex, currentIndex + cardsToShow).map((course) => (
            <li key={course.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 mb-6 bg-blueGray-800 rounded-lg flex flex-col h-full mx-2">
              {course.image && (
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 object-cover mb-2 rounded-t-lg hover:scale-105 transition-transform duration-300"
                />
              )}
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold p-4 text-yellow-500 ">
                  {course.name}
                </h2>
                <p className="text-sm p-4">
                  {course.discription}
                </p>
              </div>
              <Link to="/admin/details">
                <button className="w-full bg-yellow-500 hover:bg-yellow-400 font-semibold p-2 rounded-lg mt-2">
                  Details
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center text-lg text-yellow-500">No courses found</div>
      )}
    </div>
  );
}

export default CoursesData;

