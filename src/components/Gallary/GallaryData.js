import React from 'react'
// import quran from "assets/img/quran.jpg";
import hadith from "assets/img/hadith.jpg";
// import fiqh from "assets/img/figh.jpg";



const islamicStudies = [
  {
    title: "Talimat islam",
    image: hadith,
 
  },
  {
    title: "taleemat islam",
    image: hadith,
  
  },
  {
    title: "taleeemat islam",
    image: hadith,
  
  },
  {
    title: "taleeemat islam",
    image: hadith,
  
  },
  {
    title: "taleeemat islam",
    image: hadith,
  
  },
  {
    title: "taleeemat islam",
    image: hadith,
  
  },
  {
    title:"taleeemat islam",
    image: hadith,
  
  },
  {
    title: "taleeemat islam",
    image: hadith,
  
  },

];

function GallaryData() {
  return (
    <div className='bg-black'>
      <h1 className='text-center text-5xl p-5 font-bold text-yellow-500'>Gallery</h1>   
    <div className="flex flex-wrap">
              
          {islamicStudies.map((study, index) => (
            <div key={index} className="w-full lg:w-4/12 px-4 mt-6 lg:mt-0">
              <div className= "shadow-lg rounded-lg p-6 text-yellow-500 bg-blueGray-800">
                <div className="flex items-center justify-center ">
                  <img className="rounded-lg w-full h-60 object-cover hover-zoom" src={study.image} alt={study.title} />
                </div>
               <div className="p-2">
               <h3 className="text-xl font-semibold mt-4 mb-4 text-center">{study.title}</h3>
              </div>
              </div>
            </div>
          ))}
        </div>
    </div>

  )
}

export default GallaryData
