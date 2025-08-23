import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../../assets/KickStar/HeroImg.png';


const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative -mt-25 w-full h-[700px] py-0 bg-[#FFF4EC] px-6 md:px-12 lg:px-18 flex items-center justify-between font-['Poppins']">
      <div className="w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* Text Content */}
        <div className="text-center mb-5  md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-[120px] font-poltawski Nowy font-bold text-center">
            AI & ML
          </h1>
          <p className="text-[40px] mt-4 text-black font-medium px-8">
            Your 90-Day Career Kickstart  
            <p> – By Expert Ferrero Rocher </p> 
          </p>

          <div className="absolute bottom-16 left-20 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/courses')}
              className="bg-[#FF6501] text-white text-[20px] px-16 py-3 rounded-md font-semibold"
            >
              Explore Courses
            </button>
            <button
              onClick={() => navigate('/#')}
              className="bg-black text-white text-[20px] px-16 py-3 rounded-md font-semibold"
            >
              Talk to our Counsellor
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="absolute right-5 bottom-0 md:w-[730px]">
          <img
            src={img1}
            alt="Hero Section"
            className="w-full h-[492px] flex item-end md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
