import React from "react";
// import ambassadorImage from "../../assets/Pride/AmbassadorSection/ambassador.png"; // replace with your actual path
import ambassadorImage from "../../assets/Pride/AmbassadorAdvice/ambassador.png";


const AmbassadorAdvice = () => {
  return (
    <section className="relative font-['Poppins'] overflow-hidden">
      {/* Top White Area */}
      <div className="bg-white text-center px-4 py-12 mb-28">
        <h2 className="text-3xl md:text-[48px] font-semibold text-orange-500 mb-4">
          Get our Ambassador’s Advice
        </h2>
        <p className="max-w-3xl mx-auto text-black md:text-[24px] mb-6">
          More people are finally talking about gender identity in schools and colleges, which is an encouraging and strong step in the...
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md md:text-xl  font-medium transition">
            Enroll Now
          </button>
          <button className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-md font-medium transition md:text-xl">
            Talk to our Counsellor
          </button>
        </div>
      </div>

      {/* Bottom Orange Background */}
      <div className="bg-[#FF6501B2] h-[105px] md:h-[305px] relative">
        {/* Image Overlapping Top and Bottom */}
        <div className="absolute inset-x-0 -top-[75px] md:-top-[100px] flex justify-center">
          <div className="relative w-[90%] max-w-4xl rounded-2xl overflow-hidden shadow-lg">
            <img
              src={ambassadorImage}
              alt="Ambassador Advice"
              className="w-full h-auto object-cover mb-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorAdvice;
