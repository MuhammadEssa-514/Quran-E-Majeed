import React from "react";
import quran from "assets/img/quran.jpg";
import hadith from "assets/img/hadith.jpg";
import fiqh from "assets/img/figh.jpg";
import madrasa from "assets/img/landingpage-img-2.avif";
// Islamic studies data array
const islamicStudies = [
  {
    title: "Quranic Studies",
    description: "Our Quranic studies program covers recitation, Tajweed, and in-depth tafsir.",
    image: quran,
 
  },
  {
    title: "Hadith Studies",
    description: "Learn and explore the teachings of Prophet Muhammad (PBUH) through Hadith studies.",
    image: hadith,
  
  },
  {
    title: "Fiqh (Islamic Jurisprudence)",
    description: "Our Fiqh courses teach the principles of Islamic law and how to apply them in daily life.",
    image: fiqh,
  
  },

];

// Upcoming events data array
const upcomingEvents = [
  "Ramadan Program - Quran Recitation and Study (April 2024)",
  "Islamic Workshop on Fiqh and Modern Life (May 2024)",
  "Seerah of Prophet Muhammad (PBUH) - Special Session (June 2024)",
];

// Community announcements data array
const communityAnnouncements = [
  "New Quranic Studies class for beginners starting soon.",
  "Join our weekly Hadith study circle every Friday evening.",
  "Volunteer opportunities available for the upcoming Ramadan program.",
];

export default function Dashboard() {
  return (
    <>
      <div className="container mx-auto px-4 z-1 relative">
        {/* Welcome Section */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full   px-4">
            <div className=" shadow-lg rounded-lg  mb-8 text-white bg-blueGray-800">
            <div className="flex items-center justify-center">
                  <img className="rounded-lg w-[80%] h-50 object-cover" src={madrasa} alt="Imamia Madrasa"/>
                </div>
          <div className="p-8 ">
          <h2 className="text-3xl font-semibold mb-4 text-center">
                Welcome to <span className="text-yellow-500">Imamia</span> Madrasa 
              </h2>
              <p className="text-lg text-center">
                Empowering Islamic education by providing knowledge on Quran, Hadith, Fiqh, and more.
                Manage your courses and stay updated with upcoming events.
              </p>
          </div>
            </div>
          </div>
        </div>

        {/* Islamic Data Cards */}
        <div className="flex flex-wrap">
          {islamicStudies.map((study, index) => (
            <div key={index} className="w-full lg:w-4/12 px-4 mt-6 lg:mt-0">
              <div className= "shadow-lg rounded-lg p-6 text-white bg-yellow-500">
                <div className="flex items-center justify-center">
                  <img className="rounded-lg w-full h-60 object-cover" src={study.image} alt={study.title} />
                </div>
               <div className="p-2">
               <h3 className="text-xl font-semibold mt-4 text-center">{study.title}</h3>
               <p className="mt-2 text-center text-md">{study.description}</p>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Islamic Events */}
        <div className="flex flex-wrap mt-12 ">
          <div className="w-full lg:w-6/12 px-4 mb-8">
            <div className=" shadow-lg rounded-lg p-8 bg-yellow-500 text-white">
              <h3 className="text-xl font-semibold mb-4 text-center">Upcoming Islamic Events</h3>
              <ul>
                {upcomingEvents.map((event, index) => (
                  <li key={index} className="mb-2">• {event}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Community Announcements */}
          <div className="w-full lg:w-6/12 px-4  mb-8 ">
            <div className=" shadow-lg rounded-lg p-8 bg-yellow-500 text-white">
              <h3 className="text-xl font-semibold mb-4 text-center">Community Announcements</h3>
              <ul >
                {communityAnnouncements.map((announcement, index) => (
                  <li key={index} className="mb-2">• {announcement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
