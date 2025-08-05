import React from 'react';
import udaanImg from "../../assets/Home/OurProgram/Udaan2.png";
import fusionImg from "../../assets/Home/OurProgram/SFP_02.png";
import Head from "../../assets/Home/OurProgram/head.webp";
import HeadingImage from "../Lines/HeadingImages";
import SubHeadImg from "../Lines/SubHeading";
import ContactForm from "../../Pages/ContactForm";
import { useState } from "react";

const OurProgram = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="w-full mx-auto px-4 sm:p-16 font-['Poppins']">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12">
        <HeadingImage title="Our" highlight="Programs" />
        <p className="text-base sm:text-lg md:text-xl mx-auto max-w-[90%] sm:max-w-full">
          Skill up, stand out, and soar into success with our expert led
          programs.
        </p>
      </div>

      {/* Grid 1 */}
      <div className="max-w-[973px] mx-auto bg-[#FFF0E6] rounded-2xl shadow-md border border-orange-100 overflow-hidden flex flex-col md:flex-row font-['Poppins']">
        {/* Left: Image with stats bar */}
        <div className="relative md:w-1/2 w-full flex justify-center items-center mb-8 sm:mb-15 mt-3 sm:ml-7 px-4 sm:px-0">
          <img
            src={udaanImg}
            alt="Udaan 90"
            className="w-full max-w-[355px] h-auto sm:h-[360px] object-cover rounded-3xl"
          />

          {/* Overlapping Stats Bar */}
          <div className="absolute -bottom-4 sm:-bottom-8 flex justify-between items-center text-white bg-orange-500 w-[92%] sm:w-[497px] h-[80px] sm:h-[101px] px-4 sm:px-[60px] py-2 sm:py-[20px] gap-4 sm:gap-[60px] rounded-xl sm:rounded-[20px] shadow-lg z-10">
            <div className="text-center">
              <p className="font-bold text-sm sm:text-base md:text-[24px]">2K+</p>
              <p className="text-xs sm:text-sm md:text-[18px] font-medium">Enrolled</p>
            </div>
            <div>
              <img
                src={Head}
                alt="logo_head"
                className="w-6 h-6 sm:w-[32px] sm:h-[32px] object-cover"
              />
            </div>
            <div className="text-center">
              <p className="font-bold text-sm sm:text-base md:text-[24px]">1089 hours</p>
              <p className="text-xs sm:text-sm md:text-[18px] font-medium">of Learning</p>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-between p-4 sm:p-6 md:p-8 w-full md:w-1/2 sm:ml-5">
          <div>
            <SubHeadImg text="Udaan - 90" />

            <p className="font-semibold text-[#333333] mb-1">
              <span className="underline underline-offset-1 decoration-gray-[#333333] text-lg sm:text-[24px]">
                Zero to Job–Ready in 90 Days at just ₹999.
              </span>
            </p>
            <p className="text-orange-500 font-medium my-2 sm:my-4 text-lg sm:text-[22px]">
              Affordable. Practical. Result-driven.
            </p>
            <ul className="mb-4 sm:mb-6 text-[#333333] text-base sm:text-[18px] list-disc list-inside p-2 sm:p-3 font-medium space-y-1">
              <li>Live classes + projects</li>
              <li>Resume & interview preparation</li>
              <li>Mentorship + peer support</li>
              <li>Duration – 3 Months</li>
              <li>Upto 7 LPA Package</li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-0 flex justify-center sm:justify-start">
            <button 
              className="w-[120px] sm:w-[153px] h-[35px] sm:h-[40px] bg-black hover:bg-[#7B7B7B] text-white px-4 sm:px-[40px] py-1 sm:py-[5px] rounded-lg text-base sm:text-[20px]"
              onClick={() => setShowModal(true)}
            >
              Explore
            </button>

            {/* The Modal */}
            {showModal && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50"
                onClick={() => setShowModal(false)}
              >
                <div
                  className="relative max-w-xl w-full mx-2 sm:mx-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ContactForm onClose={() => setShowModal(false)} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Grid 2 */}
      <div className="max-w-[973px] mx-auto bg-[#FFF0E6] rounded-2xl shadow-md border border-orange-100 overflow-hidden flex flex-col md:flex-row font-['Poppins'] mt-8 sm:mt-10">
        {/* Left: Content */}
        <div className="flex flex-col justify-between p-4 sm:p-6 md:p-8 w-full md:w-1/2 sm:ml-5 order-2 md:order-1">
          <div>
            <SubHeadImg text="Success Fusion" />

            <p className="font-semibold text-[#333333] mb-1">
              <span className="underline underline-offset-1 decoration-gray-[#333333] text-lg sm:text-[24px]">
                ₹4999 Upskill & Placement Program.
              </span>
            </p>
            <p className="text-orange-500 font-medium my-2 sm:my-4 text-lg sm:text-[22px]">
              Learn. Intern. Get Hired.
            </p>
            <ul className="mb-4 sm:mb-6 text-[#333333] text-base sm:text-[18px] list-disc list-inside p-2 sm:p-3 font-medium space-y-1">
              <li>12-month structured learning</li>
              <li>Live projects + Internships</li>
              <li>Placement support</li>
              <li>1:1 mentorship</li>
              <li>Upto 20 LPA Package</li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-0 flex justify-center sm:justify-start">
            <button 
              className="w-[120px] sm:w-[153px] h-[35px] sm:h-[40px] bg-black hover:bg-[#7B7B7B] text-white px-4 sm:px-[40px] py-1 sm:py-[5px] rounded-lg text-base sm:text-[20px]"
              onClick={() => setShowModal(true)}
            >
              Explore
            </button>

            {/* The Modal */}
            {showModal && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50"
                onClick={() => setShowModal(false)}
              >
                <div
                  className="relative max-w-xl w-full mx-2 sm:mx-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ContactForm onClose={() => setShowModal(false)} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Image with stats bar */}
        <div className="relative md:w-1/2 w-full flex justify-center items-center mb-8 sm:mb-15 mt-3 sm:mr-7 px-4 sm:px-0 order-1 md:order-2">
          <img
            src={fusionImg}
            alt="Success Fusion"
            className="w-full max-w-[355px] h-auto sm:h-[360px] object-cover rounded-3xl"
          />

          {/* Overlapping Stats Bar */}
          <div className="absolute -bottom-4 sm:-bottom-8 flex justify-between items-center text-white bg-orange-500 w-[92%] sm:w-[497px] h-[80px] sm:h-[101px] px-4 sm:px-[60px] py-2 sm:py-[20px] gap-4 sm:gap-[60px] rounded-xl sm:rounded-[20px] shadow-lg z-10">
            <div className="text-center">
              <p className="font-bold text-sm sm:text-base md:text-[24px]">2K+</p>
              <p className="text-xs sm:text-sm md:text-[18px] font-medium">Enrolled</p>
            </div>
            <div>
              <img
                src={Head}
                alt="logo_head"
                className="w-6 h-6 sm:w-[32px] sm:h-[32px] object-cover"
              />
            </div>
            <div className="text-center">
              <p className="font-bold text-sm sm:text-base md:text-[24px]">1089 hours</p>
              <p className="text-xs sm:text-sm md:text-[18px] font-medium">of Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProgram;