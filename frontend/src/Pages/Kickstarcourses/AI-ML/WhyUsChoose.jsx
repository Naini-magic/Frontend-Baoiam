import React from 'react';
import {
  FaFire,
  FaUserGraduate,
  FaBriefcase,
  FaChalkboardTeacher,
  FaCertificate,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaFire className="text-[#FF6501] text-[24px]" />,
    text: 'Intensive 90-Day Learning Journey',
  },
  {
    icon: <FaUserGraduate className="text-[#FF6501] text-[24px]" />,
    text: 'Designed for Absolute Beginners',
  },
  {
    icon: <FaBriefcase className="text-[#FF6501] text-[24px]" />,
    text: 'Interview-Ready Portfolio Projects',
  },
  {
    icon: <FaChalkboardTeacher className="text-[#FF6501] text-[24px]" />,
    text: 'Industry Expert-Led Live Sessions',
  },
  {
    icon: <FaCertificate className="text-[#FF6501] text-[24px]" />,
    text: 'Certification & Career Support',
  },
];

const WhyChooseSection = () => {
  return (
    <section className="text-center py-16 bg-[#f9f9f9] px-4">
      <h2 className="text-[48px] font-bold mb-2">
        Why <span className="text-[#FF6501]">Choose</span> AI-ML?
      </h2>
      <p className="text-[20px] max-w-3xl mx-auto mb-10">
        Get access to industry-relevant courses designed to transform your tech skills and launch your career — all in just 90 days.
      </p>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] md:w-[30%] bg-white px-6 py-4 rounded-xl shadow-sm flex items-start gap-3 text-left"
          >
            {item.icon}
            <span className="text-[20px] font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
