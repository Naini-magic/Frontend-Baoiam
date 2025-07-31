import React, { useState } from "react";
import img3 from "../../assets/AboutUs/im3.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Nexnott Dating App – for people who want real, not random.",
    image: img3,
  },
  {
    title: "Courses that will worth your time—training and job-ready.",
    image: img3,
  },
  {
    title: "Live classes where you can learn, and actually interact.",
    image: img3,
  },
  {
    title: "Real-time projects for your resume & critical thinking skills",
    image: img3,
  },
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  // Card dimensions that will be consistent across all screens
  const cardStyle = {
    clipPath: "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)",
    height: "320px",
    width: "100%",
  };

  return (
    <div className="py-8 md:py-12 px-4 md:px-10 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-[48px] font-semibold mb-2 md:mb-4">
        Our <span className="text-orange-500">Services</span>
      </h2>
      <p className="text-black text-base md:text-[24px] mb-10 md:mb-20 max-w-2xl mx-auto">
        Designed to Support, Guide, and Inspire Your Growth.
      </p>

      {/* Service Cards */}
      <div className="space-y-6 max-w-5xl mx-auto">
        {/* Mobile/Tablet Carousel */}
      
        <div className="lg:hidden relative h-[420px] mb-10 mt-20">
          <div className="relative flex flex-col items-center h-full">
            {/* Image */}
            <div className="absolute -top-12 w-[150px] h-[150px] rounded-full border-4 border-orange-500 bg-white p-1 z-10">
              <img
                src={services[currentIndex].image}
                alt="Service"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className="relative bg-white text-center px-6 pt-28 pb-16 w-full max-w-[260px] shadow-xl shadow-gray-500 border-gray-200 border-[2px]"
              style={cardStyle}
            >
              {/* Text */}
              <p className="text-[22px] text-gray-800 mt-3">
                {services[currentIndex].title}
              </p>

              {/* Orange triangle */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-[70px] border-r-[70px] border-t-[20px] border-l-transparent border-r-transparent border-t-orange-500"></div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid (hidden on mobile/tablet) */}
        <div className="hidden lg:grid grid-cols-4 gap-8 max-w-[1104px] h-[320px] mb-20 mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center h-full"
            >
              {/* Image */}
              <div className="absolute -top-12 w-[150px] h-[150px] rounded-full border-4 border-orange-500 bg-white p-1 z-10">
                <img
                  src={service.image}
                  alt="Service"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Card */}
              <div
                className="relative bg-white text-center px-4 pt-20 pb-16 w-full shadow-xl shadow-gray-500 border-gray-200 border-[2px]"
                style={cardStyle}
              >
                {/* Text */}
                <p className="text-[20px] text-gray-800 mt-20">
                  {service.title}
                </p>

                {/* Orange triangle */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-[70px] border-r-[70px] border-t-[20px] border-l-transparent border-r-transparent border-t-orange-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div
        className="mt-8 md:mt-16 relative bg-cover bg-center rounded-lg md:rounded-xl overflow-hidden text-white"
        style={{
          backgroundImage: `url(${img3})`,
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(0deg,#FF7C27,#FF7C27),linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5))] opacity-30"></div>

        {/* Content layer */}
        <div className="relative z-10 bg-black/60 px-4 py-6 md:px-12 md:py-10 text-center">
          <h3 className="text-xl md:text-3xl font-bold mb-2">
            Connect With Us
          </h3>
          <p className="text-sm md:text-base mb-4 md:mb-6">
            From Pune to Delhi to Bengaluru—we've been where students are.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <button className="bg-white text-orange-500 text-sm md:text-xl px-4 py-1 md:px-10 md:py-2 rounded-md hover:text-orange-700 hover:opacity-30 hover:bg-orange-200 transition duration-200">
              Apply Now →
            </button>
            <button className="bg-black text-white text-sm md:text-xl font-semibold px-4 py-1 md:px-10 md:py-2 rounded-md shadow hover:bg-gray-500 transition duration-200">
              Talk to our Counsellor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
