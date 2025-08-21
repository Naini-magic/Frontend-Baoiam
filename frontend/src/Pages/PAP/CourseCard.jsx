import React from "react";
import courseImg from "../../assets/PAP/CourseImg.png";
import { FaStar } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
import { FaUser, FaClock, FaChartBar } from "react-icons/fa";
import { FiBarChart } from "react-icons/fi";
// import Head from "../../assets/Home/OurProgram/head.webp";
import { Link } from "react-router-dom";
import DS from "../../assets/Home/FeaturedCourses/DS_F.png";
import DA from "../../assets/Home/FeaturedCourses/DA_F.png";
import Head from "../../assets/PAP/head.png";

const CourseCard = () => {
  const courseData = [
    {
      title: "Data Science Course",
      rating: 5.0,
      description:
        "Up skill on the most in demand skills in the market – Python, Excel, Power BI, SQL.",
      brochure: "/Brochure/DS.pdf",
      brochureName: "DataScience_Brochure.pdf",
      link: "/DataScience",
      image: DS,
    },
    {
      title: "Data Analysis Course",
      rating: 5.0,
      description:
        "Up skill on the most in demand skills in the market – Python, Excel, Power BI, SQL.",
      brochure: "/Brochure/DA.pdf",
      brochureName: "DataAnalysis_Brochure.pdf",
      link: "/DataAnalysis",
      image: DA,
    },
  ];

  return (
    <div className="bg-white py-10 px-4 md:px-10 font-['Poppins']">
      {/* Heading */}
      <h2 className="text-[32px] md:text-[36px] font-semibold text-center mb-2">
        Our courses with{" "}
        <span className="text-orange-500 font-bold">Pay after Placement</span>{" "}
        Options
      </h2>
      <p className="text-center text-black mb-10 text-[20px]">
        From learning to earning — payment comes after placement
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
        {courseData.map((course, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition duration-300"
          >
            <div className="flex items-center justify-between mt-4">
              {/* Left: Image + Title */}
              <div className="flex items-center gap-2">
                <img
                  src={Head}
                  alt="Head Icon"
                  className="w-6 h-6 sm:w-6 sm:h-6 object-contain"
                />
                <h3 className="text-lg font-bold">{course.title}</h3>
              </div>

              {/* Right: Rating */}
              <div className="flex items-center gap-1 text-yellow-500">
                <FaStar size={16} />
                <span className="text-sm font-medium">{course.rating}</span>
              </div>
            </div>

            {/* Header */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={course.image}
                alt="Course"
                className="w-full h-48 object-cover"
              />
              {/* <div className="absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded">
                Pay after Placement Available
              </div>
              <div className="absolute top-2 right-2 bg-white text-xs font-semibold px-2 py-1 rounded">
                Lifetime Access
              </div> */}
            </div>

            {/* Description */}
            <p className="text-sm text-black mt-2">{course.description}</p>

            {/* Details */}
            <div className="text-sm text-gray-700 mt-4 space-y-4">
              {/* Eligibility */}
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <FaUser className="text-indigo-500 text-lg" />
                  <span className="font-medium text-gray-900">Eligibility</span>
                </div>
                <span className="text-right">
                  All degrees and
                  <br />
                  Backgrounds Eligible
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <FaClock className="text-green-500 text-lg" />
                  <span className="font-medium text-gray-900">Duration</span>
                </div>
                <span className="text-right">12 Months</span>
              </div>

              {/* Selection Process */}
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <FiBarChart className="text-red-400 text-lg" />
                  <span className="font-medium text-gray-900">
                    Selection Process
                  </span>
                </div>
                <span className="text-right">
                  All degrees and
                  <br />
                  Backgrounds Eligible
                </span>
              </div>

              {/* Next Batch */}
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <FaRedo className="text-red-400 text-lg" />
                  <span className="font-medium text-gray-900">Next Batch</span>
                </div>
                <span className="text-right">
                  All degrees and
                  <br />
                  Backgrounds Eligible
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-7 mt-6">
              <a
                href={course.brochure}
                download={course.brochureName}
                className="flex-1 bg-[#FFE8D9E5] text-orange-500 text-center font-medium py-2 rounded-md hover:bg-orange-300"
              >
                Brochure
              </a>

              <Link
                to={course.link}
                className="flex-1 text-center bg-orange-500 text-white font-medium py-2 rounded-md hover:bg-orange-300 hover:text-orange-500"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
