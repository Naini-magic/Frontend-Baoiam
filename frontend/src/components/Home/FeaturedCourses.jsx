
import React, { useState } from "react";
import { FaStar, FaUserGraduate, FaClock } from "react-icons/fa";
import Group from "../../assets/Home/Lines/Group.webp";
import DS from "../../assets/Home/FeaturedCourses/DS_F.png";
import DA from "../../assets/Home/FeaturedCourses/DA_F.png";
import DM from "../../assets/Home/FeaturedCourses/DM.png";
import SD from "../../assets/Home/FeaturedCourses/SD.png";
import { FiBarChart } from "react-icons/fi";
import { Link } from "react-router-dom";
import ContactForm from "../../Pages/ContactForm";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const courses = [
  {
    id: 1,
    title: "Data Science",
    rating: 4.8,
    description: "Build models and extract insights.",
    students: "150.3K",
    level: "Intermediate",
    duration: "45 hours",
    image: DS,
  },
  {
    id: 2,
    title: "Data Analysis",
    rating: 4.7,
    description: "Clean, visualize, and analyze data.",
    students: "98.5K",
    level: "Beginner",
    duration: "35 hours",
    image: DA,
  },
  {
    id: 3,
    title: "Digital Marketing",
    rating: 4.9,
    description: "Grow with SEO and social ads.",
    students: "265.7K",
    level: "Beginner",
    duration: "40 hours",
    image: DM,
  },
  {
    id: 4,
    title: "Software Developement",
    rating: 5.0,
    description: "Full-stack development training.",
    students: "73.4K",
    level: "Advanced",
    duration: "80 hours",
    image: SD,
  },
];

const FeaturedCourses = () => {
  const [showModal, setShowModal] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section
      className="bg-white rounded-[20px] font-['Poppins'] mx-auto max-w-[calc(100%-40px)] lg:max-w-[1350px] px-4 sm:px-6 py-8 sm:py-10"
      style={{
        border: "0.5px solid #ECEBF6",
        boxShadow: "0px 0px 8px 0px #00000026",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-center w-full mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">
          Featured <span className="text-orange-500">Courses</span>
        </h2>
        <img src={Group} alt="" className="w-6 sm:w-8 md:w-9 mb-3 sm:mb-4 ml-2" />
      </div>

      {/* Courses - Desktop View (unchanged) */}
      {isDesktop ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full max-w-[1280px] mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-[10px] flex flex-col"
              style={{
                minWidth: "100%",
                height: "auto",
                padding: "15px",
                border: "0.5px solid #ECEBF6",
                boxShadow: "0px 4px 8px 0px #00000026",
              }}
            >
              {/* Course Header */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[15px] sm:text-[16px] font-medium">{course.title}</h3>
                <div className="flex items-center text-black text-sm">
                  <FaStar className="mr-1 text-amber-500" /> {course.rating}
                </div>
              </div>

              {/* Course Image */}
              <img
                src={course.image}
                alt={course.title}
                className="h-[130px] sm:h-[135px] w-full object-cover mb-2 rounded-sm"
              />

              {/* Course Description */}
              <p className="text-black text-sm mb-1">{course.description}</p>

              {/* Students Enrolled */}
              <div className="flex gap-1 items-center text-gray-800 text-xs mb-2 mt-auto">
                <FaUserGraduate className="mr-1 text-blue-900" />
                {course.students}
                <span className="text-xs text-gray-500 ml-1">students enrolled</span>
              </div>

              {/* Level and Duration */}
              <div className="flex justify-between items-center text-gray-500 text-xs mb-2">
                <div className="flex items-center">
                  <FiBarChart className="text-orange-400 mr-1" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-green-600 mr-1" />
                  {course.duration}
                </div>
              </div>

              {/* Start Learning Button */}
              <Link
                to={
                  course.id === 1
                    ? "/DataScience"
                    : course.id === 2
                    ? "/DataAnalysis"
                    : course.id === 3
                    ? "/DigitalMarketing"
                    : "/SoftwareDevelopment"
                }
                className="text-white bg-[#FF6501E5] hover:bg-[#FF650133] hover:text-orange-500 transition duration-300 mt-2 text-sm mx-auto"
                style={{
                  width: "129px",
                  height: "25px",
                  borderRadius: "5px",
                  padding: "2px 15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "14px",
                }}
              >
                Start Learning
              </Link>
            </div>
          ))}
        </div>
      ) : (
        /* Mobile/Tablet View - Carousel */
        <div className="max-w-[calc(100%-10px)] mx-auto">
          <Slider {...sliderSettings}>
            {courses.map((course) => (
              <div key={course.id} className="px-2">
                <div
                  className="bg-white rounded-[10px] flex flex-col"
                  style={{
                    minWidth: "100%",
                    height: "auto",
                    padding: "15px",
                    border: "0.5px solid #ECEBF6",
                    boxShadow: "0px 4px 8px 0px #00000026",
                  }}
                >
                  {/* Course Header */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[15px] sm:text-[16px] font-medium">{course.title}</h3>
                    <div className="flex items-center text-black text-sm">
                      <FaStar className="mr-1 text-amber-500" /> {course.rating}
                    </div>
                  </div>

                  {/* Course Image */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-[130px] sm:h-[135px] w-full object-cover mb-2 rounded-sm"
                  />

                  {/* Course Description */}
                  <p className="text-black text-sm mb-1">{course.description}</p>

                  {/* Students Enrolled */}
                  <div className="flex gap-1 items-center text-gray-800 text-xs mb-2 mt-auto">
                    <FaUserGraduate className="mr-1 text-blue-900" />
                    {course.students}
                    <span className="text-xs text-gray-500 ml-1">students enrolled</span>
                  </div>

                  {/* Level and Duration */}
                  <div className="flex justify-between items-center text-gray-500 text-xs mb-2">
                    <div className="flex items-center">
                      <FiBarChart className="text-orange-400 mr-1" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-green-600 mr-1" />
                      {course.duration}
                    </div>
                  </div>

                  {/* Start Learning Button */}
                  <Link
                    to={
                      course.id === 1
                        ? "/DataScience"
                        : course.id === 2
                        ? "/DataAnalysis"
                        : course.id === 3
                        ? "/DigitalMarketing"
                        : "/SoftwareDevelopment"
                    }
                    className="text-white bg-[#FF6501E5] hover:bg-[#FF650133] hover:text-orange-500 transition duration-300 mt-2 text-sm mx-auto"
                    style={{
                      width: "129px",
                      height: "25px",
                      borderRadius: "5px",
                      padding: "2px 15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "14px",
                    }}
                  >
                    Start Learning
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* Explore More Button */}
      <div className="mt-10 flex justify-center">
        <button
          className="text-white bg-black hover:bg-[#7B7B7B] transition duration-300 text-[18px] sm:text-xl md:w-[208px] md:h-[46px]"
          onClick={() => setShowModal(true)}
          style={{
            borderRadius: "5px",
            padding: "5px 5px",
            boxShadow: "0px 4px 6px 0px #0000001A",
          }}
        >
          Explore more →
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




      
    </section>
  );
};

export default FeaturedCourses;








