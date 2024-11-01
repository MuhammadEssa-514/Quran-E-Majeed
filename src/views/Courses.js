import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import CoursesData from "components/Courses/CoursesData";


export default function Courses() {
  return (
    <>
    <main className="bg-black">
      <IndexNavbar fixed />
    <div className="mt-24"><CoursesData/></div>
      <Footer />
    </main>

    </>
  );
}
