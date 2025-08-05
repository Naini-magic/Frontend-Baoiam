import React from "react";

const JourneySection = () => {
  return (
    <div className="py-12 px-4 md:px-10 bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-[48px] font-bold text-center mb-2">
        Our <span className="text-orange-500">Journey</span>
      </h2>
      <p className="text-center text-black text-base md:text-[24px] mx-auto mb-6 md:mb-10 max-w-2xl">
        What our side of journey looks like to reach you
      </p>

      {/* Grid Structure */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
        {/* Left Side - Mobile: hidden, Desktop: shown */}
        <div className="hidden md:flex flex-col -mr-20 items-center font-poppins justify-center space-y-32 h-[467px]">
          <div className="bg-white shadow border-r-4 border-orange-500 p-4 text-justify text-lg md:text-[24px]">
            <p>
              More than 4+ years of practical experience developing
              professionals who are prepared for future.
            </p>
          </div>
        </div>

        {/* Center Road */}
        <div className="relative hidden md:flex justify-center h-auto md:h-[467px] mb-8 md:mb-0">
          
          <div className="h-8 md:h-full w-8 bg-gray-400 relative">
            {/* White dashed stripes */}
            <div className="absolute inset-0 flex md:flex-col justify-between items-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-14 md:w-1 h-1 md:h-14 bg-white"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Mobile: all items, Desktop: as original */}
        <div className="flex flex-col md:-ml-20 items-center md:justify-between font-poppins space-y-8 md:space-y-32 h-auto md:h-[467px]">
          {/* Mobile: Show left side content first */}
          <div className="md:hidden bg-white shadow border-l-4 border-orange-500 p-4 text-justify text-lg w-full">
            <p>
              Equipped more than 4000+ students with practical experience and
              employable skills.
            </p>
          </div>

          <div className="bg-white shadow border-l-4 md:border-l-4 border-orange-500 p-4 text-justify text-lg md:text-[24px] w-full">
            <p>
              We've been at this for 4+ years, and we still get excited about
              every project.
            </p>
          </div>

          <div className="bg-white shadow border-l-4 md:border-l-4 border-orange-500 p-4 text-justify text-lg md:text-[24px] w-full">
            <p>
              Hundreds of placements were made possible by our focused training
              and mentoring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
