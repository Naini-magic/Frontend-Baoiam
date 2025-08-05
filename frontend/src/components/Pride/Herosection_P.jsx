import React from "react";
import bonnay from "../../assets/Pride/Herosection_P/bonnay.webp";
import { Link } from "react-router-dom";

const HeroSection_P = () => {
  return (
    <section className="relative bg-white overflow-hidden pt-10 md:pt-16 lg:pt-10 font-['Poppins']">
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-8 md:ml-8 lg:ml-16 xl:ml-14">
        {/* LEFT SIDE - Content */}
        <div className="flex-1 order-1 md:order-1 text-center md:text-left">
          <h1 className="text-[24px] sm:text-[28px] md:text-5xl lg:text-[55px] font-semibold text-black leading-snug mb-4 md:mb-6 max-w-full md:max-w-[630px] mx-auto md:mx-0">
            Living With <span className="text-[#8A38F5]">Pride,</span> Leading
            With <span className="text-[#FF6501]">Purpose.</span>
          </h1>

          <p className="text-[#222222] text-[15px] sm:text-base md:text-[24px] mb-6 md:mt-5 max-w-[95%] sm:max-w-[90%] md:max-w-[650px] mx-auto md:mx-0 text-justify sm:text-center md:text-justify leading-relaxed">
            Unlock your potential with transformative, expert-led courses
            designed to fuel your ambition, celebrate your identity, and empower
            your journey.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link to="/DataScience">
              <button className="bg-[#FF6501] hover:bg-[#FF8434] px-6 py-2 sm:px-8 sm:py-2 text-white font-semibold rounded-md transition duration-300 text-[16px] sm:text-[18px] md:text-[20px]">
                Enroll Now
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="flex-1 order-2 md:order-2 relative flex justify-center w-full">
          {/* Orange blob background */}
          <div className="absolute -z-10 w-40 h-40 sm:w-52 sm:h-52 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-orange-500 rounded-[35%_65%_65%_35%/45%_45%_55%_55%] opacity-100"></div>

          {/* Image */}
          <img
            src={bonnay}
            alt="Hero"
            className="relative w-72 sm:w-52 md:w-[370px] lg:w-[460px] rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection_P;

