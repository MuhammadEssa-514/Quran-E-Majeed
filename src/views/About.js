import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import AboutData from "components/About/AboutData";


export default function About() {
  return (
    <>
    <main className="bg-black">
      <IndexNavbar />

        <div className="mt-24">
            <AboutData/>
        </div>

      <Footer />
    </main>

    </>
  );
}
