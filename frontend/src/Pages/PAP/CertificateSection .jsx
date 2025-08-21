import React from "react";
import certificateImage from "../../assets/CoursesLayout/CoursesPage/certificate.jpg";

const CertificateSection = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 flex justify-center font-['Poppins'] ">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-10 md:gap-20">
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl md:text-[40px] font-semibold leading-snug mb-4">
            Department for Promotion of Industry and Internal Trade 
            Corporation <span className="text-orange-500">(DPIIT)</span>
            <br />
            Accredited Certificate
          </h2>
          <p className="text-black text-sm md:text-[24px] leading-relaxed max-w-lg">
            Learn Now. Get Certified with our top
            accredited government recognised
            certificate . Pay Only After You're Placed
          </p>
        </div>

        {/* Right Certificate Image */}
        <img
          src={certificateImage}
          alt="Certificate"
          className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default CertificateSection;
