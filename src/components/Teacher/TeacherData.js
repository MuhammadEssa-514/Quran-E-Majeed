// import React, { useState } from 'react';

// import quranImg1 from '../../assets/img/qari.jpg';
// // import quranImg2 from '../../assets/img/courses/quran1.png';
// // import quranImg3 from '../../assets/img/courses/quran2.png';
// // import quranImg4 from '../../assets/img/courses/quran3.png';
// // import quranImg5 from '../../assets/img/courses/qarat.png';
// // import quranImg6 from '../../assets/img/courses/quran4.png';
// // import quranImg7 from '../../assets/img/courses/tafseer.png';
// // import quranImg8 from '../../assets/img/courses/balaga.png';
// // import quranImg9 from '../../assets/img/courses/sajjidia.png';
// // import quranImg10 from '../../assets/img/courses/shia fiq.png';
// // // import quranImg11 from '../../assets/img/quran/qur';
// // import quranImg12 from '../../assets/img/courses/namaz.png';
// // import quranImg13 from '../../assets/img/courses/dua.png';
// // import quranImg14 from '../../assets/img/courses/hadis.png';
// import quranImg15 from '../../assets/img/courses/tarjuma.png';

// const data = [
//   { id: 1, name: 'Yassarnal Quran Qaida', teacher:'Qari Deyanat', discription: "The Yassarnal Quran Qaida is a beginner's guide designed to teach the basics of reading the Qur'an in Arabic. The word Yassarnal means made easy indicating its purpose of simplifying the learning process.", image: quranImg1 },
//   { id: 2, name: 'Quran with Tajweed', teacher:'Qari Ahmad', discription: 'When it comes to recitation, Tajweed is the first step. Not only to improve reading the Holy Quran, but also to upgrade your Arabic.', image: quranImg1 },
//   { id: 3, name: 'Quran Reading', teacher:'Qari Salaha mahdi', discription: 'The Quran is a source of guidance and enlightenment, and that reading and reciting it can bring numerous benefits to the individual.', image: quranImg1 },
//   { id: 4, name: 'Quran Memorization', teacher:'Qari Basit',discription: 'The memorization of the Quran is an integral part of Shia religious practice and is considered a noble and highly esteemed undertaking.', image: quranImg1 },
//   { id: 5, name: 'Qirat e Quran',teacher:'Qari abdul Hameed', discription: 'Qirat e Quran is a central aspect of Shia religious practice and is valued for its spiritual and transformative power.', image: quranImg1 },
//   { id: 6, name: 'Quran Interpretation', teacher:'Qari Abbas', discription: 'The Quran is based on a deep reverence for the sacred text and a belief that its true meanings can only be understood through the guidance of the Prophet and his family members.', image: quranImg1 },
//   { id: 7, name: 'Quran With Tafseer',teacher:'Qari Asif', discription: 'The Quran with Tafseer refers to a version of the Quran that includes detailed explanations and commentaries on its verses and teachings.', image: quranImg1 },
//   { id: 8, name: 'Nehjul Balagha',teacher:'Qari Shukure', discription: 'Nahj al-Balāghah; "The Path of Eloquence" is the best-known collection of sermons, letters, and sayings attributed to Ali ibn Abi Talib.', image: quranImg1 },
//   { id: 9, name: 'Saheefa e Sajjadiyah',teacher:'Qari Ali', discription: 'Saheefa e Sajjadiyah is a collection of supplications and prayers attributed to Imam Ali Zain al-Abidin (a.s).', image: quranImg1 },
//   { id: 10, name: 'Shia Islamic Fiqh/Laws',teacher:'Qari Abdula', discription: 'Shia Fiqh is based on the teachings of the Ahlulbayt, or the family of the Prophet Muhammad, and is grounded in the principles of reason, morality, and justice.', image: quranImg1 },
//   { id: 11, name: 'Namaz',teacher:'Qari Altaf', discription: 'Namaz is seen as an essential aspect of Shia Islamic practice and is valued for its ability to promote spiritual growth, moral development, and social responsibility.', image: quranImg1 },
//   { id: 12, name: 'Duas',teacher:'Qari Tahzeeb', discription: 'Duas are prayers asking for Gods guidance, blessings, and forgiveness, and are considered a means of establishing a direct connection with God.', image: quranImg1 },
//   { id: 13, name: 'Ahadees',teacher:'Qari Naqi', discription: 'Ahadith, or sayings of the Prophet Muhammad and the Imams, are an important aspect of Shia Islamic practice according to Shia Fiqh.', image: quranImg1 },
//   { id: 14, name: 'Quran Translation',teacher:'Qari Mirza', discription: 'We have designed translation of Quran Course for male and female students who want to learn to translate Quran with the help of experienced online Quran tutors.', image: quranImg1 },
// ];

// function TeacherData() {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Filtered courses based on the search term
//   const filteredCourses = data.filter((course) =>
//     course.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className='bg-black text-white'>
// <div className='flex items-center justify-between'>
//   <div>
//   <h1 className='text-yellow-500 text-3xl text-center p-8 font-bold'>Teacher</h1>

//   </div>
//       {/* Search Input */}
//       <div className="text-center ">
//         <input
//           type="text"
//           placeholder="Search for a teacher..."
//           className="p-3 w-1/3  text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-lg"

//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//   </div>


//       {/* Course List */}
//       <ul className='grid grid-cols-3 gap-4'>
//         {filteredCourses.length > 0 ? (
//           filteredCourses.map((course) => (
//             <li key={course.id} className="mb-6 bg-blueGray-800 rounded-lg flex flex-col h-full">
//               {course.image && (
//                 <img
//                   src={course.image}
//                   alt={course.name}
//                   className="w-full h-48 object-cover mb-2 rounded-t-lg "
//                 />
//               )}
//               <div className="flex-grow">
//                 <h2 className="text-2xl font-semibold p-4 text-yellow-500 ">
//                   {course.name}
//                 </h2>
//                 <p className='text-2xl font-semibold px-4 text-yellow-500'>
//                   {course.teacher}
//                 </p>
//                 <p className="text-sm p-4">
//                   {course.discription}
//                 </p>
//               </div>
              
//             </li>
//           ))
//         ) : (
//           <li className="text-center col-span-3 text-lg text-yellow-500">No found</li>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default TeacherData
"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import image1 from '../../assets/img/angular.jpg'; 
import image2 from '../../assets/img/bootstrap.jpg';
import image3 from '../../assets/img/angular.jpg'; 

const teachersData = [
  { id: 1, name: "Dimitres Viga", position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: image1 },
  { id: 2, name: "Maria Garcia", position: "Teacher", subjects: ["Literature", "History"], image: image2 },
  { id: 3, name: "Maria Garcia", position: "Teacher", subjects: ["Literature", "History"], image: image3 },
  // Add more unique teachers as needed
];

export default function TeacherData() {
  const [teachers, setTeachers] = useState(teachersData);
  const [search, setSearch] = useState("");
  const [newTeacher, setNewTeacher] = useState({ name: "", position: "", subjects: [], image: "" });
  const [currentSubject, setCurrentSubject] = useState(""); // New state for current subject
  const [showForm, setShowForm] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const handleAddSubject = () => {
    if (currentSubject) {
      setNewTeacher((prev) => ({
        ...prev,
        subjects: [...prev.subjects, currentSubject.trim()],
      }));
      setCurrentSubject(""); // Clear input after adding
    }
  };

  const handleAddTeacher = () => {
    // Ensure fields are not empty
    if (!newTeacher.name || !newTeacher.position || !newTeacher.image || newTeacher.subjects.length === 0) {
      alert("Please fill in all fields and upload an image.");
      return;
    }
    
    const id = teachers.length + 1;
    setTeachers((prevTeachers) => [...prevTeachers, { id, ...newTeacher }]);
    setNewTeacher({ name: "", position: "", subjects: [], image: "" });
    setImagePreview("");
    setShowForm(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setNewTeacher((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-2 bg-blueGray-800">
      <div className="flex flex-wrap justify-between mb-4 p-4 dark:bg-boxdark">
        <input
          type="text"
          placeholder="Search here..."
          className="border dark:border-gray-300 border-yellow-500 rounded px-3 py-2 dark:bg-boxdark outline-none w-[30%] bg-blueGray-800 text-white mb-2 custom-placeholder"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-blueGray-800 font-bold px-4 py-2 rounded bg-yellow-500">
          {showForm ? "Cancel" : "+ Add Teacher"}
        </button>
      </div>

      {showForm && (
        <div className="mb-4 bg-yellow-500 " style={{maxWidth:"400px",margin:"auto",marginBottom:"30px",padding:"10px"}}>
          <input
            type="text"
            placeholder="Name....."
            value={newTeacher.name}
            onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
            className="border dark:border-gray-300 border-black rounded px-3 py-2 dark:bg-boxdark w-full mb-2 bg-blueGray-800"
          />
          <input
            type="text"
            placeholder="Position....."
            value={newTeacher.position}
            onChange={(e) => setNewTeacher({ ...newTeacher, position: e.target.value })}
            className="border dark:border-gray-300 border-black rounded px-3 py-2 dark:bg-boxdark w-full mb-2 bg-blueGray-800"
          />
          <input
            type="text"
            placeholder="Add Subject....."
            value={currentSubject}
            onChange={(e) => setCurrentSubject(e.target.value)}
            className="border dark:border-gray-300 border-black rounded px-3 py-2 dark:bg-boxdark w-full mb-2 bg-blueGray-800"
          />
          <button
            onClick={handleAddSubject}
            className="text-white px-4 py-2 rounded mb-2 bg-blueGray-800">
            Add Subject
          </button>
          <input
            type="file"
            onChange={handleImageChange}
            className="border dark:border-gray-300 border-black rounded px-3 py-2 dark:bg-boxdark w-full mb-2 bg-blueGray-800"
          />
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="w-24 h-24 object-cover mb-2" />
          )}
          <button
            onClick={handleAddTeacher}
            className=" text-white px-4 py-2 rounded bg-blueGray-800">
            Add Teacher
          </button>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 mb-1">
        {filteredTeachers.map((teacher) => (
          <div key={teacher.id} className="border rounded-lg mb-2 p-4 shadow-md bg-yellow-500 w-full dark:bg-boxdark dark:text-white dark:border-strokedark">
            <img
              src={teacher.image}
              alt={teacher.name}
              className="mx-auto object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-center">{teacher.name}</h3>
            <h4 className="text-md text-center">{teacher.position}</h4>
            <div className="mt-2 flex flex-wrap">
              {teacher.subjects.map((subject, idx) => (
                <span key={idx} className="text-xs bg-gray-200 rounded-full px-2 py-1 mr-2 mt-1 dark:bg-blue-300">
                  {subject}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <Link to='/profile'>
                <button className="bg-blueGray-800 hover:bg-blueGray-800 text-white px-3 py-1 rounded w-full">
                  Profile
                </button>
              </Link>
              <a href={`https://wa.me/?text=Chat%20with%20${teacher.name}`} target="_blank" rel="noopener noreferrer">
                <button className="bg-blueGray-800 hover:bg-blueGray-700 px-3 py-1 rounded w-full text-white">
                  Chats
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
