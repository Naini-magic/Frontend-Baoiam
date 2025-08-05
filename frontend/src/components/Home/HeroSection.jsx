import React, { useState } from "react";
import StatsSection from "./StatsSection";
// import { MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";
import img1 from "../../assets/Home/HeroSection/h1.png";
import img2 from "../../assets/Home/HeroSection/h2.png";
import img3 from "../../assets/Home/HeroSection/h3.png";
import img4 from "../../assets/Home/HeroSection/h4.png";
import img5 from "../../assets/Home/HeroSection/h5.png";
import img6 from "../../assets/Home/HeroSection/h6.png";
import ContactForm from "../../Pages/ContactForm";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-white text-gray-800 px-2 pt-5 sm:pt-13 sm:px-4 font-['Poppins'] w-full max-w-[1290px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
        {/* Content Section */}
        <div className="flex flex-col w-full md:w-[650px] ">
          {/* Headline */}
          <h3 className="w-full text-[28px] sm:text-[40px] md:text-[52px] font-semibold leading-[100%] font-poppins">
            <span className="text-black">Learn. Build. </span>
            <span className="text-orange-500">Get Hired.</span>
          </h3>

          {/* Subheading */}
          <p className="w-full text-[14px] sm:text-[18px] font-medium leading-normal text-[#222222] mt-4">
            Where talent meets training and dreams take off. Backed by mentors,
            bootcamps & outcomes.
          </p>

          {/* "What brings you to Baoiam" section */}
          <div className="flex flex-col w-full gap-5 mt-8">
            <h2 className="w-full text-[16px] sm:text-[22px] font-semibold leading-[100%] text-[#222222]">
              What brings you to Baoiam today?
            </h2>

            <ul className="flex flex-col gap-3">
              {[
                "Launch my career with job-ready skills",
                "Upskill while in college",
                "Switch to high-demand career",
                "Explore AI-Powered courses",
              ].map((text, idx) => (
                <li
                  key={idx}
                  className="cursor-default flex items-center w-full px-3 py-2 rounded-[5px] bg-[#F8F8F8] gap-3 font-medium text-[14px] md:text-lg transition-all hover:bg-gray-200"
                >
                  <input
                    type="radio"
                    name="goal"
                    className="accent-orange-500 w-4 h-4 transition-all hover:scale-110"
                  />
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-8">
              {/* <Link to="/DataScience" className="w-[80%] sm:w-auto">
                <button className="bg-[#FF6501] rounded-lg text-white flex items-center justify-center gap-2 py-1.5 sm:py-2 px-3 sm:px-4 font-medium text-[14px] sm:text-xl hover:bg-[#FF650133] hover:text-orange-500 w-full"
                 onClick={() => setShowModal(true)}>
                  Apply Now →
                </button>
              </Link> */}
              <div className="w-[80%] sm:w-auto">
                 <button className="bg-[#FF6501] rounded-lg text-white flex items-center justify-center gap-2 py-1.5 sm:py-2 px-3 sm:px-4 font-medium text-[14px] sm:text-xl hover:bg-[#FF650133] hover:text-orange-500 w-full"
                 onClick={() => setShowModal(true)}>
                  Apply Now →
                </button>

                {showModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50"
                    onClick={() => setShowModal(false)}
                  >
                    <div
                      className="relative max-w-xl w-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ContactForm onClose={() => setShowModal(false)} />
                    </div>
                  </div>
                )}
              </div>
              <div className="w-[80%] sm:w-auto">
                <button
                  className="bg-black text-white border rounded-lg py-1.5 sm:py-2 px-3 sm:px-4 text-[14px] sm:text-xl hover:bg-[#7B7B7B] w-full"
                  onClick={() => setShowModal(true)}
                >
                  Talk to our Counsellor
                </button>

                {showModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50"
                    onClick={() => setShowModal(false)}
                  >
                    <div
                      className="relative max-w-xl w-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ContactForm onClose={() => setShowModal(false)} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Image Scrollers */}
        <div className="flex justify-center sm:gap-8 ml-0 sm:mb-8 sm:mt-8 md:mt-0 w-full md:w-auto">
          {/* LEFT SCROLLER */}
          <div className="relative h-[300px] sm:h-[460px] sm:w-[240px] overflow-hidden">
            <motion.div
              className="flex flex-col items-center space-y-6 gap-[40px]"
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[img1, img2, img3, img4, img5, img6].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  className="sm:h-[220px] sm:w-[200px] object-cover rounded-lg"
                />
              ))}
            </motion.div>
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>

          {/* RIGHT SCROLLER */}
          <div className="relative h-[300px] sm:h-[460px] sm:w-[240px] overflow-hidden">
            <motion.div
              className="flex flex-col items-center space-y-6 gap-[40px]"
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                delay: 3,
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[img4, img5, img6, img3, img1, img2].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  className="sm:h-[220px] sm:w-[200px] object-cover rounded-lg"
                />
              ))}
            </motion.div>
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
