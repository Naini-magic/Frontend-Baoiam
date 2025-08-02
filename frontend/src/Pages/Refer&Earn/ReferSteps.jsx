import React from "react";
import { FaCheck, FaShareAlt, FaHeart } from "react-icons/fa";

const steps = [
  {
    icon: <FaCheck className="text-orange-500 text-[20px] md:text-3xl" />,
    title: "Sign up",
    desc: "sign up to our refer and earn program program.",
  },
  {
    icon: <FaShareAlt className="text-orange-500 text-[20px] md:text-3xl" />,
    title: "Share",
    desc: "share your unique referral code with your friends and they'll get a discount on our courses.",
  },
  {
    icon: <FaHeart className="text-orange-500 text-[20px] md:text-3xl" />,
    title: "Receive",
    desc: "at every course purchase by your friend you will receive the benefits and rewards.",
  },
];

const ReferSteps = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 text-center font-['Poppins']">
     
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">Steps</h2>
      <p className="text-gray-600 text-base sm:text-lg mb-12">
        Follow these steps to refer someone to our platform.
      </p>

      {/* Step Cards + Dashed Waves */}
      <div className="relative flex  flex-col md:flex-row items-center justify-between gap-4 md:gap-20">
        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10">
            <div className="bg-white shadow-md rounded-full w-[160px] h-[160px] md:w-[220px] md:h-[220px] flex flex-col items-center justify-center text-center mx-auto">
              <div className="mb-1 sm:mb-3">{step.icon}</div>
              <h3 className="text-[11px] md:text-lg font-bold text-black mb-1">
                {step.title}
              </h3>
              <p className="text-[10px] md:text-sm text-black px-4">{step.desc}</p>
            </div>

            {/* Wave Line to Next Step (only for 1st and 2nd) */}
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 left-[100%] ml-4 w-[300px] h-[80px]">
                <svg
                  viewBox="0 0 160 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M0 20 C 40 0, 120 40, 160 20"
                    stroke="#F97316"
                    strokeWidth="2"
                    strokeDasharray="8"
                    fill="none"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReferSteps;
