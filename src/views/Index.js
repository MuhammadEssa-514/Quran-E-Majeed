import React from "react";
import { Link } from "react-router-dom";
import islamicedu from "assets/img/landing-img-3.jpg";
import quran from "assets/img/landingpage-img-2.avif";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import studentportal from "assets/img/login.jpg";
import teacherprofile from "assets/img/profile.jpg";
import courseoverview from "assets/img/landing.jpg";
import bgHeader from 'assets/img/bg-header.jpg';


export default function Index() {
  return (
    <>
    <main className="bg-black">
      <IndexNavbar fixed />
      <section
  className="header relative pt-16 items-center flex h-screen max-h-860-px bg-cover bg-center"
  style={{ backgroundImage: `url(${bgHeader})` }}
>
  <div className="container mx-auto items-center flex flex-wrap">
    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
      <div className="pt-32 sm:pt-0">
        <h1 className="font-semibold text-4xl text-yellow-500">
          Imamia Madrasa - Premier Coaching Center for Islamic Studies.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-white">
          Imamia Madrasa is committed to providing high-quality education in Islamic studies. We offer courses in Quranic teachings, Hadith, Fiqh, and more, using modern educational techniques combined with traditional Islamic knowledge.
        </p>
        <div className="mt-12">
          <a
            href="https://imamiamadrasa.com/courses"
            target="_blank"
            className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-yellow-500 active:bg-yellow-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
            Explore Courses
          </a>
          <a
            href="https://imamiamadrasa.com/about"
            className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            target="_blank">
            About Us
          </a>
        </div>
      </div>
    </div>
  </div>

</section>


      <section className="mt-48 md:mt-40 pb-40 relative ">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
        </div>
        <div className="container mx-auto">
  <div className="flex flex-wrap items-center">
    <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-800">
        <img
          alt="Imamia Madrasa"
          src={islamicedu}  
          className="w-full align-middle rounded-t-lg"
        />
        <blockquote className="relative p-8 mb-4">
       
          <h4 className="text-xl font-bold text-white">
            Empowering Islamic Education
          </h4>
          <p className="text-md font-light mt-2 text-white">
            At Imamia Madrasa, we are dedicated to providing top-notch Islamic education, 
            helping students understand Quranic teachings, Islamic jurisprudence (Fiqh), 
            and Hadith studies in a comprehensive manner.
          </p>
        </blockquote>
      </div>
    </div>

    <div className="w-full md:w-6/12 px-4 text-white">
      <div className="flex flex-wrap">
        <div className="w-full md:w-6/12 px-4">
          <div className="relative flex flex-col mt-4">
            <div className="px-4 py-5 flex-auto">
              <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-500 ">
                <i className="fas fa-quran"></i>
              </div>
              <h6 className="text-xl mb-1 font-semibold">
                Quranic Studies
              </h6>
              <p className="mb-4 ">
                Our Quranic studies program provides in-depth understanding and 
                recitation skills for students at all levels.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0">
            <div className="px-4 py-5 flex-auto">
              <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-500">
                <i className="fas fa-book"></i>
              </div>
              <h6 className="text-xl mb-1 font-semibold">
                Fiqh (Islamic Jurisprudence)
              </h6>
              <p className="mb-4 ">
                Our Fiqh courses cover a wide range of topics, teaching students 
                the principles of Islamic law and practical application in daily life.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 mt-4">
            <div className="px-4 py-5 flex-auto">
              <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-500">
                <i className="fas fa-book-reader"></i>
              </div>
              <h6 className="text-xl mb-1 font-semibold">Hadith Studies</h6>
              <p className="mb-4 ">
                Learn the sayings of Prophet Muhammad (PBUH) and their application in the modern world through our detailed Hadith studies.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0">
            <div className="px-4 py-5 flex-auto">
              <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-500">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h6 className="text-xl mb-1 font-semibold">
                Workshops & Seminars
              </h6>
              <p className="mb-4 ">
                We offer regular workshops and seminars on various Islamic topics 
                to provide a deeper understanding and practical knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container mx-auto overflow-hidden ">
  <div className="flex flex-wrap items-center pt-32">
    <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
      <div className="justify-center flex flex-wrap relative">
        <div className="my-4 w-full lg:w-6/12 px-4">
        
          <div className="bg-blueGray-800 shadow-lg rounded-lg text-center p-8">
            <div className="shadow-md rounded-full max-w-full w-16 h-16 mx-auto py-4 bg-white text-green-600">
              <i className="fas fa-quran fa-2x"></i> 
            </div>
            <p className="text-lg text-white mt-4 font-semibold">
              Quranic Studies
            </p>
          </div>

          <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8 mt-8">
            <div className="shadow-md rounded-full max-w-full w-16 h-16 mx-auto py-4 bg-blueGray-800 text-white">
              <i className="fas fa-balance-scale fa-2x "></i> 
            </div>
            <p className="text-lg mt-4 font-semibold text-blueGray-800">
              Fiqh (Islamic Jurisprudence)
            </p>
          </div>

          <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
            <div className="shadow-md rounded-full max-w-full w-16 h-16 mx-auto py-4 bg-white text-blueGray-800">
              <i className="fas fa-book fa-2x"></i> 
            </div>
            <p className="text-lg text-white mt-4 font-semibold">
              Hadith Studies
            </p>
          </div>
        </div>

        <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
          <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
            <div className="shadow-md rounded-full max-w-full w-16 h-16 mx-auto py-4 bg-blueGray-800 text-white">
              <i className="fas fa-chalkboard-teacher fa-2x"></i> 
            </div>
            <p className="text-lg text-blueGray-800 mt-4 font-semibold">
              Workshops & Seminars
            </p>
          </div>

          <div className="bg-blueGray-800 shadow-lg rounded-lg text-center p-8 mt-8">
            <div className="shadow-md rounded-full max-w-full w-16 h-16 mx-auto py-4 bg-white ">
              <i className="fas fa-pen-nib fa-2x"></i> 
            </div>
            <p className="text-lg text-white mt-4 font-semibold">
              Tajweed (Quran Recitation Rules)
            </p>
          </div>

          <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8 mt-8">
            <div className="shadow-md rounded-full max-w-full w-16 h-16 mx-auto py-4 bg-blueGray-800 text-white ">
              <i className="fas fa-hourglass-half fa-2x"></i> 
            </div>
            <p className="text-lg text-blueGray-800 mt-4 font-semibold">
              Islamic History
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48 ">
      <div className=" p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-500">
        <i className="fas fa-mosque text-xl"></i>
      </div>
      <div className="text-white">

     
      <h3 className="text-3xl mb-2 font-semibold leading-normal">
        Explore Islamic Learning
      </h3>
      <p className="text-lg font-light leading-relaxed mt-4 mb-4 ">
        Our courses provide in-depth knowledge of various Islamic disciplines, 
        ranging from Quranic studies, Hadith, Fiqh, and Tajweed, to Islamic history.
      </p>
      <p className="text-lg font-light leading-relaxed mt-4 mb-4 ">
        We also host dynamic workshops and seminars to enhance understanding and 
        practical application of Islamic teachings.
      </p>
      </div>
      <div className="block pb-6">
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-yellow-500 last:mr-0 mr-2 mt-2">
          Quranic Studies
        </span>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-yellow-500  last:mr-0 mr-2 mt-2">
          Fiqh
        </span>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-yellow-500 last:mr-0 mr-2 mt-2">
          Hadith
        </span>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-yellow-500 last:mr-0 mr-2 mt-2">
          Tajweed
        </span>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-yellow-500 last:mr-0 mr-2 mt-2">
          Islamic History
        </span>
      </div>
      <a
        href="https://imamiamadrasa.com/courses"
        target="_blank"
        className="font-bold text-white hover: ease-linear transition-all duration-150"
      >
        View all Courses{" "}
        <i className="fa fa-angle-double-right ml-1 leading-relaxed text-yellow-500"></i>
      </a>
    </div>
  </div>
</div>


<div className="container mx-auto px-4 pb-32 pt-48">
  <div className="items-center flex flex-wrap">
    <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
      <div className="md:pr-12">
        <div className=" p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-500">
          <i className="fas fa-book-open text-xl"></i>
        </div>
        <div className="text-white">

        <h3 className="text-3xl font-semibold">
          Islamic Studies Curriculum
        </h3>
        <p className="mt-4 text-lg leading-relaxed ">
          Imamia Madrasa offers a comprehensive curriculum that covers various
          aspects of Islamic studies, including Quranic teachings, Fiqh, Hadith,
          and Islamic history. Our courses are designed to provide students
          with a deep understanding of their faith and religious principles.
        </p>
        </div>

        <ul className="list-none mt-6">
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-yellow-500 mr-3">
                  <i className="fas fa-quran"></i>
                </span>
              </div>
              <div>
                <h4 className="text-white">
                  Quranic Studies with Tajweed
                </h4>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-yellow-500 mr-3">
                  <i className="fas fa-balance-scale"></i>
                </span>
              </div>
              <div>
                <h4 className="text-white">
                  Fiqh (Islamic Jurisprudence) Studies
                </h4>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  bg-yellow-500 mr-3">
                  <i className="fas fa-book"></i>
                </span>
              </div>
              <div>
                <h4 className="text-white">
                  Hadith and Islamic History Courses
                </h4>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
      <img
        alt="Islamic Studies"
        className="max-w-full rounded-lg shadow-xl"
        style={{
          transform:
            "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
        }}
        src={quran} 
      />
    </div>
  </div>
</div>

<div className="justify-center text-center flex flex-wrap mt-24">
  <div className="w-full md:w-6/12 px-12 md:px-4">
    <h className="font-semibold text-4xl text-yellow-500 ">Comprehensive Islamic Studies</h>
    <p className="text-lg leading-relaxed mt-4 mb-4 text-white">
      Imamia Madrasa offers a holistic approach to Islamic education, focusing
      on the Quran, Hadith, Fiqh, and more. Explore our well-structured courses
      designed to help students deepen their understanding of Islamic knowledge.
    </p>
  </div>
</div>

      </section>

      <section className="block relative z-1  ">
  <div className="container mx-auto">
    <div className="justify-center flex flex-wrap">
      <div className="w-full lg:w-12/12 px-4 -mt-24">
        <div className="flex flex-wrap">
         
          <div className="w-full lg:w-4/12 px-4">
            <h5 className="text-xl font-semibold pb-4 text-center text-white">
              Student Login
            </h5>
            <Link to="/auth/login">
              <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <img
                  alt="Student Portal"
                  className="align-middle border-none max-w-full h-auto rounded-lg"
                  src={studentportal}
                />
              

              </div>
            </Link>
          </div>

          <div className="w-full lg:w-4/12 px-4">
            <h5 className="text-xl font-semibold pb-4 text-center text-white">
              Teacher Profile
            </h5>
            <Link to="/profile">
              <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <img
                  alt="Teacher Profile"
                  className="align-middle border-none max-w-full h-auto rounded-lg"
                  src={teacherprofile}
                />
              </div>
            </Link>
          </div>

          <div className="w-full lg:w-4/12 px-4">
            <h5 className="text-xl font-semibold pb-4 text-center text-white">
              Course Overview
            </h5>
            <Link to="/courses">
              <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <img
                  alt="Course Overview"
                  className="align-middle border-none max-w-full h-auto rounded-lg"
                  src={courseoverview}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    
    
      <Footer />
    </main>

    </>
  );
}
