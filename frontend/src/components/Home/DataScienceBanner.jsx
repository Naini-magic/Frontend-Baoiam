import React, { useState } from "react";
import rocket from "../../assets/Home/DataScienceBanner/rocket.webp";
import human from "../../assets/Home/DataScienceBanner/human.webp";
import { Link } from "react-router-dom";
import ContactForm from "../../Pages/ContactForm";

const DataScienceBanner = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="
        w-full max-w-[1200px] rounded-[10px]
        sm:rounded-[20px] shadow-md
        flex flex-row
        justify-between items-center
        mx-auto my-10 px-4 py-6
        relative overflow-hidden
        font-['Poppins']
      "
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 101, 1, 0.06) 0%, rgba(255, 101, 1, 0.6) 100%)",
      }}
    >
      {/* Left Content */}
      <div className="flex flex-col flex-1 min-w-[250px]">
        {/* Rocket and Headline */}
        <div className="flex flex-row items-start gap-1 sm:gap-6 md:gap-8">
          <img
            src={rocket}
            alt="Rocket"
            className="w-[40px] h-[50px] sm:w-[120px] sm:h-[100px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px] object-contain"
          />

          <div className="text-left">
            <h1 className="text-[18px] sm:text-2xl md:text-[30px] lg:text-[40px] font-semibold text-[#FF6501] leading-tight">
              Data Science{" "}
              <span className="text-black font-medium">Career</span>
            </h1>
            <p className="text-[12px] sm:text-xl md:text-[22px] lg:text-[28px] font-medium mt-2">
              Starts at{" "}
              <span className="line-through text-[12px] sm:text-lg font-medium">
                ₹79,999
              </span>{" "}
              <span className="text-[#FF6501] font-semibold text-[14px] sm:text-[28px] md:text-[36px] lg:text-[40px]">
                ₹4,999
              </span>
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-4 md:mt-6 text-left text-[12px] sm:text-lg md:text-[22px] lg:text-[28px] font-medium">
          <p className="text-gray-700">
            <span className="text-orange-500">12 Months</span> |{" "}
            <span className="text-black">Live classes</span> |{" "}
            <span className="text-orange-500">Projects</span> |{" "}
            <span className="text-black">Placement Support</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex gap-1 sm:gap-4 text-[12px] sm:text-base md:text-lg lg:text-xl font-medium">
          <Link to="/DataScience">
            <button className="bg-black text-white px-1 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#7B7B7B]">
              Enroll Now
            </button>
          </Link>

          <div>
            <button
              className="text-black bg-white rounded-lg py-1 sm:py-2 px-4 hover:bg-[#7B7B7B]"
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

      {/* Right Image */}
      <div className="sm:ml-6 md:ml-8 flex-shrink-0">
        <img
          src={human}
          alt="Data Analytics"
          className="w-[120px] h-[150px] sm:w-[180px] sm:h-[240px] md:w-[240px] md:h-[300px] lg:w-[300px] lg:h-[350px] object-cover"
        />
      </div>

    </div>
  );
};

export default DataScienceBanner;
