import React from "react";
import { FaGraduationCap, FaLightbulb, FaHandshake, FaStar } from "react-icons/fa";

const WhyUsSection = () => {
  return (
    <div className="bg-gray-50 mt-10 py-8 md:py-12 px-4 md:px-8">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-[48px] font-semibold">
          What Makes Us <span className="text-orange-500">Different</span>
        </h2>
        <p className="mt-2 md:mt-4 text-gray-700 text-base md:text-[24px] mx-auto max-w-2xl md:max-w-4xl">
          The values, support, and care that makes us more than any another learning platform.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="group bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md md:hover:shadow-xl p-4 md:p-6 flex flex-col items-center text-center transition duration-300">
          <div className="w-16 h-16 md:w-[100px] md:h-[100px] bg-white-50 p-2 md:p-4 rounded-full border-2 border-orange-500 group-hover:border-transparent mb-4 md:mb-10">
            <FaGraduationCap className="w-8 h-8 md:w-[60px] md:h-[60px] text-black transition-transform duration-300 group-hover:scale-110 md:group-hover:scale-125 ml-2 sm:ml-0" />
          </div>
          <p className="text-gray-800 font-medium text-base md:text-[22px]">Student-Centric Learning Approach</p>
        </div>

        {/* Card 2 */}
        <div className="group bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md md:hover:shadow-xl p-4 md:p-6 flex flex-col items-center text-center transition duration-300">
          <div className="w-16 h-16 md:w-[100px] md:h-[100px] bg-white-50 p-2 md:p-4 rounded-full border-2 border-orange-500 group-hover:border-transparent mb-4 md:mb-10">
            <FaLightbulb className="w-8 h-8 md:w-[60px] md:h-[60px] text-yellow-300 transition-transform duration-300 group-hover:scale-110 md:group-hover:scale-125 ml-2 sm:ml-0" />
          </div>
          <p className="text-gray-800 font-medium text-base md:text-[22px]">Innovative Projects for Real-Life Impact</p>
        </div>

        {/* Card 3 */}
        <div className="group bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md md:hover:shadow-xl p-4 md:p-6 flex flex-col items-center text-center transition duration-300">
          <div className="w-16 h-16 md:w-[100px] md:h-[100px] bg-white-50 p-2 md:p-4 rounded-full border-2 border-orange-500 group-hover:border-transparent mb-4 md:mb-10">
            <FaHandshake className="w-8 h-8 md:w-[60px] md:h-[60px] text-yellow-300 transition-transform duration-300 group-hover:scale-110 md:group-hover:scale-125 ml-2 sm:ml-0" />
          </div>
          <p className="text-gray-800 font-medium text-base md:text-[22px]">Building Community via Events & Collaboration</p>
        </div>

        {/* Card 4 */}
        <div className="group bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md md:hover:shadow-xl p-4 md:p-6 flex flex-col items-center text-center transition duration-300">
          <div className="w-16 h-16 md:w-[100px] md:h-[100px] bg-white-50 p-2 md:p-4 rounded-full border-2 border-orange-500 group-hover:border-transparent mb-4 md:mb-10">
            <FaStar className="w-8 h-8 md:w-[60px] md:h-[60px] text-yellow-300 transition-transform duration-300 group-hover:scale-110 md:group-hover:scale-125 ml-2 sm:ml-0" />
          </div>
          <p className="text-gray-800 font-medium text-base md:text-[22px]">Passionate, Experienced Team of Experts</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;