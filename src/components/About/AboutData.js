import React from 'react';
import img1 from "../../assets/Quran wallpaper.png";
import img2 from "../../assets/img/namaz.jpg";
import img3 from "../../assets/img/namaz.jpg";
import img4 from "../../assets/img/namaz.jpg";
import { Link } from 'react-router-dom';
import '../Contact/style.css';
const AboutData = () => {
  const cardsData = [
    {
      title: 'Card 1',
      description: 'This is the first card.',
      image: img2,
    },
    {
      title: 'Card 2',
      description: 'This is the second card.',
      image: img3,
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      image: img4,
    },
  ];
  const Card = ({ title, description, image }) => {
    return (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105">
        <img className="w-full h-40 object-cover" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-gray-800 hover:text-yellow-500 transition-colors">{title}</div>
          <p className="text-gray-600 text-base mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <button className="bg-yellow-500 hover:bg-yellow-400 p-2 rounded-lg text-white transition-colors">
              button            </button>
            {/* <span className="text-sm text-gray-500">Posted recently</span> */}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div>
        <div className="background flex items-center justify-center">
          <h2 className="text-5xl font-bold text-yellow-500 mb-4 text-center">About Us</h2>
        </div>
        <div className=''>
          <section className="">
            <div className='text-white text-center w-1/2 mx-auto  py-5 '>
              <h1 className='text-3xl font-bold py-4'>We are Ecomus</h1>
              <p className=" mb-2">
                Welcome to Taleemat e Ahlulbayt, your go-to source for understanding the teachings of the Holy Quran.
                Our mission is to provide clear and accessible interpretations of the Quranic verses to help individuals
                connect with their faith and spirituality.
                We are dedicated to promoting knowledge and understanding of Islam through our online Quran classes.
                Our platform offers resources tailored for both new learners and those seeking deeper insights into Islamic teachings.
                In addition to our educational offerings, we provide a variety of online services aimed at enhancing your spiritual journey
                and facilitating a deeper connection with the Quran.
                Join us on this enlightening journey as we explore the timeless wisdom of the Quran together. Thank you for visiting our site.
                We hope you find the information valuable and inspiring!
              </p>
            </div>
            <div className='flex justify-center gap-4 mt-4'>
              <Link to="/home">
                <button className='bg-yellow-500 hover:bg-yellow-400 p-2 rounded-lg text-white'>Home</button>
              </Link>
              <Link to='/contact'>
                <button className='bg-yellow-500 hover:bg-yellow-400 p-2 rounded-lg text-white'>Contact Us</button>
              </Link>
            </div>
          </section>
        </div>
        <div className='flex justify-center gap-4  py-4'>
          <div className=''>
            <img src={img1} width={500} alt="Quran" />
          </div>
          <div className='w-1/2 text-white leading-4'>
            <h1 className='text-2xl font-bold py-4'>Established - 2024</h1>
            <p className=''>
              The Quran Majeed is the holy book of Islam, believed to be the word of Allah revealed to Prophet Muhammad (SAW). It consists of 114 chapters (surahs) and 6,236 verses (ayat), written in Arabic.
              The Quran's message focuses on guidance, morality, and justice for humanity. It provides direction not only for worship but also for every aspect of life, including social, ethical, and political matters. Its recitation and understanding are highly emphasized, and Muslims regard it as a vital source of guidance.
              The Quran is considered divine, making it a timeless text relevant to people of all eras. Muslims are obligated to memorize, recite, and understand its teachings. Overall, the Quran serves as a source of wisdom and guidance for improving human life.
            </p>
          </div>
        </div>
        <div className='text-white'>
          {/* <div className="flex justify-center p-4 gap-4 text-blueGray-800">
            {cardsData.map((card, index) => (
              <Card key={index} title={card.title} description={card.description} image={card.image} />
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}
export default AboutData;