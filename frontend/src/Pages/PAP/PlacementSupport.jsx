import React from "react";
import { FaBriefcase, FaUserTie, FaFileAlt, FaBrain } from "react-icons/fa";

const PlacementSupport = () => {
  return (
    <div className="bg-white py-10 px-4 flex justify-center font-['Poppins']">
      <div className="max-w-5xl w-full flex flex-col items-center text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-[48px] font-semibold text-black leading-snug mb-10">
          Our Dedicated Placement Team <br className="hidden md:block" />
          is committed to get you a{" "}
          <span className="text-orange-500">Job</span>
        </h2>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {/* Feature 1 */}
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <FaBriefcase className="text-orange-500 text-2xl" />
            </div>
            <p className="text-black text-[24px] ">
              Exclusive access to our <br /> partner companies
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <FaUserTie className="text-orange-500 text-2xl" />
            </div>
            <p className="text-black text-[24px] ">
              1v1 experts sessions
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <FaFileAlt className="text-orange-500 text-2xl" />
            </div>
            <p className="text-black text-[24px] ">
              Resume, Linkedin, <br /> Portfolio building
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <FaBrain className="text-orange-500 text-2xl" />
            </div>
            <p className="text-black text-[24px] ">
              Soft Skills, HR Interview <br /> & Aptitude Training
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementSupport;
