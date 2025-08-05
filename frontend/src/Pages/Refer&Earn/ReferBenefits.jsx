import React from "react";
import MoneyImage from "../../assets/Refer&Earn/Paise.png";

const ReferBenefits = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-16 px-6 md:px-12 lg:px-24 text-center font-['Poppins']">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">
        Benefits of being  <span className="text-orange-500">a Referrer</span>
      </h2>
      <p className="text-gray-600 text-base sm:text-lg mb-12">
        Refer your friends to our courses and earn exclusive rewards and
        benefits.
      </p>

      {/* Card Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center bg-white rounded-xl shadow-md p-6 lg:p-10 gap-8 max-w-6xl mx-auto">
        {/* Left: Form */}
        <div className="bg-[#FF7D29] text-white rounded-xl p-6 lg:p-10 w-full lg:w-1/2 lg:mx-8">
          <h3 className="text-xl font-bold mb-6 text-center">
            Start Referring
          </h3>
          <form className="space-y-4">
            <div>
              <h4 className="text-start text-white">Full Name *</h4>
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full px-4 py-2 rounded-md text-black focus:outline-none bg-white"
              />
            </div>
            <div>
              <h4 className="text-start text-white">Email *</h4>
              <input
                type="text"
                placeholder="Email*"
                className="w-full px-4 py-2 rounded-md text-black focus:outline-none bg-white"
              />
            </div>
            <div>
              <h4 className="text-start text-white">Contact Number *</h4>
              <input
                type="text"
                placeholder="Contact Number *"
                className="w-full px-4 py-2 rounded-md text-black focus:outline-none bg-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 rounded-md mt-4 hover:bg-gray-800 transition"
            >
              Apply Now
            </button>
          </form>
        </div>

        {/* Right: Image + Tags */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={MoneyImage}
            alt="Money"
            className="w-[280px] sm:w-[320px] md:w-[380px] object-contain"
          />

          {/* Benefit Tags */}
          <div className="absolute top-4 left-4 bg-white border border-orange-500 text-sm px-4 py-1 rounded-full text-black">
            assured discounts on our courses
          </div>
          <div className="absolute top-[50%] right-0 bg-white border border-orange-500 text-sm px-4 py-1 rounded-full text-black">
            chance to win an android phone
          </div>
          <div className="absolute bottom-4 left-4 bg-white border border-orange-500 text-sm px-4 py-1 rounded-full text-black">
            chance to win a brand new Laptop
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferBenefits;
