// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { FaUser, FaPhone } from "react-icons/fa6";
// import avatar from "../../assets/CoursesLayout/CoursesPage/avatar.png";

// const HeroSection = () => {
//   return (
//     <div className="w-full bg-white">
//       {/* Top Banner */}
//       <div className="w-full bg-orange-500 text-white text-center py-2 text-[26px] font-medium">
//        Next batch starts on ⌛️ 5th August. Hurry, limited seats left!
//       </div>

//       {/* Main Section */}
//       <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
//         {/* Left Content */}
//         <div className="flex-1">
//             <div>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-snug">
//             Launch your career with our
//             <span className="text-orange-500">{" "}Data Science Course {" "}</span> 
//             and <span className="text-orange-500">Pay After Placement</span>
//           </h1>
//           <p className=" text-gray-600 text-[22px] sm:text-base max-w-xl mt-6">
//             Curriculum designed and taught by our best mentors to prepare you and upskill your resume.
//           </p>
//           </div>
//            {/* Stats */}
//       <div className="w-full flex justify-center my-10">
//         <div className="w-full max-w-[575px] min-h-[68px] rounded-[20px] bg-black text-white px-2 sm:px-4 py-4 flex flex-row justify-between items-center gap-1">
//           {/* Got Placed */}
//           <div className="text-center flex-1 min-w-[100px]">
//             <p className="text-[13px] sm:text-[18px] font-semibold flex items-center justify-center">
//               2000+
//             </p>
//             <p className="text-[10px] text-white sm:text-[14px]">Got Placed</p>
//           </div>

//           {/* Reviews */}
//           <div className="text-center flex-1 min-w-[100px]">
//             <p className="text-[13px] sm:text-[18px] font-semibold flex items-center justify-center">
//               4.5
//               <FaStar className="ml-1 text-yellow-400 text-sm sm:text-xl" />
//             </p>
//             <p className="text-[10px] sm:text-[14px] text-white font-medium">31782 Reviews</p>
//           </div>

//           {/* Learners */}
//           <div className="text-center flex-1 min-w-[100px] pr-2">
//             <div className="flex items-center justify-center">
//               <p className="text-[13px] sm:text-[18px] font-semibold">10,000+</p>
//               <img
//                 src={avatar}
//                 alt="Learners Icon"
//                 className="hidden sm:block w-[45px] h-[25px] object-cover rounded-full ml-1"
//               />
//             </div>
//             <p className="text-[10px] sm:text-[14px] text-gray-300 font-medium mt-1">Learners</p>
//           </div>
//         </div>
//       </div>
//         </div>

//         {/* Right Form Box */}
//         <div className="w-full md:w-[400px] md:h-[450px] bg-white shadow-md rounded-xl p-6 border border-gray-200">
//           <h3 className="text-lg sm:text-[32px] font-semibold text-black mb-1">
//             <span className="text-black">Start learning for </span>
//             <span className="text-orange-500 font-bold">FREE</span>
//           </h3>
//           <p className="text-[18px]  text-center text-black mb-4 ">
//             Lectures & Assignments curated by Top Tech Professionals
//           </p>

//           {/* Name Field */}
//           <div className="flex items-center border border-gray-300 rounded-md px-3 mb-4 bg-gray-100">
//             <FaUser className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full py-2 text-sm bg-transparent outline-none"
//             />
//           </div>

//           {/* Phone Field */}
//           <div className="flex items-center border border-gray-300 rounded-md px-3 mb-3 bg-gray-100">
//             <span className="text-sm text-gray-600 pr-2">+91</span>
//             <FaPhone className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               placeholder="Phone Number"
//               className="w-full py-2 text-sm bg-transparent outline-none"
//             />
//           </div>

//           {/* CTA Button */}
//           <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition mt-6">
//             Apply
//           </button>

//           <p className="text-[16px] font-medium text-center text-black mt-4">
//             By clicking ‘Apply Now For Free’, you agree to our{" "}
//             <span className="text-orange-500 underline cursor-pointer">Terms & Conditions</span>
//           </p>
//         </div>
//       </div>

     
//     </div>
//   );
// };

// export default HeroSection;




















import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaUser, FaPhone } from "react-icons/fa6";
import avatar from "../../assets/CoursesLayout/CoursesPage/avatar.png";

const HeroSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleApply = () => {
    if (!name.trim() || !phone.trim()) {
      setError("Please fill in both name and phone number.");
      return;
    }
    setError("");
    // You can handle form submission here (e.g., send data to backend)
    console.log("Form submitted:", { name, phone });
  };

  return (
    <div className="w-full bg-white">
      {/* Top Banner */}
      <div className="w-full bg-orange-500 text-white text-center py-2 text-[26px] font-medium mt-5">
        Next batch starts on ⌛️ 5th August. Hurry, limited seats left!
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-snug">
              Launch your career with our
              <span className="text-orange-500"> Data Science Course </span>
              and <span className="text-orange-500">Pay After Placement</span>
            </h1>
            <p className="text-gray-600 text-[22px] sm:text-base max-w-xl mt-6">
              Curriculum designed and taught by our best mentors to prepare you and upskill your resume.
            </p>
          </div>

          {/* Stats */}
          <div className="w-full flex justify-center my-10">
            <div className="w-full max-w-[575px] min-h-[68px] rounded-[20px] bg-black text-white px-2 sm:px-4 py-4 flex flex-row justify-between items-center gap-1">
              <div className="text-center flex-1 min-w-[100px]">
                <p className="text-[13px] sm:text-[18px] font-semibold flex items-center justify-center">
                  2000+
                </p>
                <p className="text-[10px] text-white sm:text-[14px]">Got Placed</p>
              </div>
              <div className="text-center flex-1 min-w-[100px]">
                <p className="text-[13px] sm:text-[18px] font-semibold flex items-center justify-center">
                  4.5
                  <FaStar className="ml-1 text-yellow-400 text-sm sm:text-xl" />
                </p>
                <p className="text-[10px] sm:text-[14px] text-white font-medium">31782 Reviews</p>
              </div>
              <div className="text-center flex-1 min-w-[100px] pr-2">
                <div className="flex items-center justify-center">
                  <p className="text-[13px] sm:text-[18px] font-semibold">10,000+</p>
                  <img
                    src={avatar}
                    alt="Learners Icon"
                    className="hidden sm:block w-[45px] h-[25px] object-cover rounded-full ml-1"
                  />
                </div>
                <p className="text-[10px] sm:text-[14px] text-gray-300 font-medium mt-1">Learners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Box */}
        <div className="w-full md:w-[400px] md:h-auto bg-white shadow-md rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg sm:text-[32px] font-semibold text-black mb-1">
            <span className="text-black">Start learning for </span>
            <span className="text-orange-500 font-bold">FREE</span>
          </h3>
          <p className="text-[18px] text-center text-black mb-4">
            Lectures & Assignments curated by Top Tech Professionals
          </p>

          {/* Name Field */}
          <div className="flex items-center border border-gray-300 rounded-md px-3 mb-4 bg-gray-100">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-2 text-sm bg-transparent outline-none"
            />
          </div>

          {/* Phone Field */}
          <div className="flex items-center border border-gray-300 rounded-md px-3 mb-3 bg-gray-100">
            <span className="text-sm text-gray-600 pr-2">+91</span>
            <FaPhone className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full py-2 text-sm bg-transparent outline-none"
            />
          </div>

          {/* Warning Message */}
          {error && (
            <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
          )}

          {/* CTA Button */}
          <button
            onClick={handleApply}
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition mt-2"
          >
            Apply
          </button>

          <p className="text-[16px] font-medium text-center text-black mt-4">
            By clicking ‘Apply Now For Free’, you agree to our{" "}
            <span className="text-orange-500 underline cursor-pointer hover:text-orange-700">Terms & Conditions</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

